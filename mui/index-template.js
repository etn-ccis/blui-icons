/* eslint-disable no-underscore-dangle, no-console */
const { promises: fs } = require('fs');
const path = require('path');
const { grey, white } = require('chalk');
const { loadConfig, transform } = require('@svgr/core');
const { format, resolveConfig } = require('prettier');
const svgo = require('@svgr/plugin-svgo');
const jsx = require('@svgr/plugin-jsx');
const prettier = require('@svgr/plugin-prettier');
const camelCase = require('camelcase');
const dashify = require('dashify');

function transformFilename(filename, filenameCase) {
    switch (filenameCase) {
        case 'kebab':
            return dashify(filename.replace(/_/g, '-'), { condense: true });
        case 'camel':
            return camelCase(filename);
        case 'pascal':
            return camelCase(filename, { pascalCase: true });
        default:
            throw new Error(`Unknown --filename-case ${filenameCase}`);
    }
}

const convert = (code, config, state) => {
    return transform.sync(code, config, {
        ...state,
        caller: {
            name: '@svgr/cli',
            defaultPlugins: [svgo, jsx, prettier],
        },
    });
};

const convertFile = async (filePath, config = {}) => {
    const code = await fs.readFile(filePath, 'utf-8');
    return convert(code, config, { filePath });
};

const politeWrite = (data, silent) => {
    if (!silent) {
        process.stdout.write(data);
    }
};

const formatExportName = (name) => {
    if (/[-]/g.test(name) && /^\d/.test(name)) {
        return `Svg${camelCase(name, { pascalCase: true })}`;
    }

    if (/^\d/.test(name)) {
        return `Svg${name}`;
    }

    return camelCase(name, { pascalCase: true });
};

const exists = async (filepath) => {
    try {
        await fs.access(filepath);
        return true;
    } catch (error) {
        return false;
    }
};

const rename = (relative, ext, filenameCase) => {
    const relativePath = path.parse(relative);
    relativePath.ext = `.${ext}`;
    relativePath.base = '';
    relativePath.name = transformFilename(relativePath.name, filenameCase);
    return path.format(relativePath);
};

const isCompilable = (filename) => {
    const ext = path.extname(filename);
    return ext === '.svg' || ext == '.SVG';
};

const defaultIndexTemplate = (paths) => {
    const exportEntries = paths.map((filePath) => {
        const basename = path.basename(filePath, path.extname(filePath));
        const exportName = formatExportName(basename);
        return `export { default as ${exportName} } from './${basename}'`;
    });
    return exportEntries.join('\n');
};

const resolveExtension = (config, ext, jsx) => ext || (config.typescript ? (jsx ? 'tsx' : 'ts') : 'js');

const dirCommand = async (opts, _, filenames) => {
    const { ext: extOpt, filenameCase = 'pascal', ignoreExisting, silent, configFile, outDir } = opts;

    const ext = resolveExtension(opts, extOpt, true);

    const write = async (src, dest) => {
        if (!isCompilable(src)) {
            return { transformed: false, dest: null };
        }

        dest = rename(dest, ext, filenameCase);
        const code = await convertFile(src, opts);
        const cwdRelative = path.relative(process.cwd(), dest);
        const logOutput = `${src} -> ${cwdRelative}\n`;

        if (ignoreExisting && (await exists(dest))) {
            politeWrite(grey(logOutput), silent);
            return { transformed: false, dest };
        }

        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.writeFile(dest, code);
        politeWrite(white(logOutput), silent);
        return { transformed: true, dest };
    };

    const generateIndex = async (dest, files, opts) => {
        const ext = resolveExtension(opts, extOpt, false);
        const filepath = path.join(dest, `index.${ext}`);
        const indexTemplate = opts.indexTemplate || defaultIndexTemplate;
        const fileContent = indexTemplate(files);
        const prettyContent = await (async () => {
            if (!opts.prettier) return fileContent;
            const prettierRcConfig = opts.runtimeConfig ? await resolveConfig(filepath, { editorconfig: true }) : {};
            return format(fileContent, {
                filepath,
                ...prettierRcConfig,
                ...opts.prettierConfig,
            });
        })();
        await fs.writeFile(filepath, prettyContent);
    };

    async function handle(filename, root) {
        const stats = await fs.stat(filename);

        if (stats.isDirectory()) {
            const dirname = filename;
            const files = await fs.readdir(dirname);
            const results = await Promise.all(
                files.map(async (relativeFile) => {
                    const absFile = path.join(dirname, relativeFile);
                    return handle(absFile, root);
                })
            );
            const transformed = results.filter((result) => result.transformed);
            if (transformed.length) {
                const destFiles = results.map((result) => result.dest).filter(Boolean);
                const dest = path.resolve(outDir, path.relative(root, dirname));
                const resolvedConfig = loadConfig.sync({ configFile, ...opts }, { filePath: dest });
                if (resolvedConfig.index) {
                    await generateIndex(dest, destFiles, opts);
                }
            }
            return { transformed: false, dest: null };
        }

        const dest = path.resolve(outDir, path.relative(root, filename));
        return write(filename, dest).catch((err) => {
            console.error('Failed to handle file: ', filename);
            throw err;
        });
    }

    await Promise.all(
        filenames.map(async (file) => {
            const stats = await fs.stat(file);
            const root = stats.isDirectory() ? file : path.dirname(file);
            await handle(file, root);
        })
    );
};

module.exports = dirCommand;

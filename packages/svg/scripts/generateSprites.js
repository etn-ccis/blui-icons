#!/usr/bin/env -S node --loader ts-node/esm
const { Command } = require('commander');
const proccess = require('process');
const { glob } = require('glob');
const lodash = require('lodash');
const { readFile, readdir, rm, writeFile, mkdir } = require('node:fs/promises');
const path = require('node:path');
const SVGSpriter = require('svg-sprite');
const cheerio = require('cheerio');

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const UpdateIconsCommand = new Command('update-icons')
    .description(`Download the lastest version of the icons from material and update the enumerators`)
    .action(main);

const TMP_PATH = 'material-design-icons';
const TMP_SRC_PATH = 'material-design-icons/src/';
const OUT_PATH = 'sprites/';
const BLUI_SVG_INDEX = 'index.json';

UpdateIconsCommand.parse();

// The main function of the script
async function main() {
    await rm(OUT_PATH, { recursive: true, force: true });
    await mkdir(OUT_PATH, { recursive: true });

    await cloneOrPullMaterialDesignIcons();

    const dictionary = await generateIconsDictionary();
    await generateSprites(dictionary);

    await createIconsEnums();
}

/**
 * Clone the `src` folder of the Material design icons repository into `material-design-icons` folder.
 * If `material-design-icons` folder already exist we just pull the latest version of the icons.
 *
 * NOTE: The material design icons repository is massive and it takes a lot of time to checkout and we need only the icons in the "src" folder.
 *       Therefore we need only to checkout the `src` folder to speed up the process.
 */
async function cloneOrPullMaterialDesignIcons() {
    try {
        console.log('[GIT] Clone material design icons repository (this can take several minutes)');
        await exec(`git clone --depth 1 --no-checkout https://github.com/google/material-design-icons.git ${TMP_PATH}`);
        process.chdir(TMP_PATH);
        console.log('[GIT] Sparse checkout of ony the "scr" folder');
        await exec(`git sparse-checkout set src`);
        await exec(`git checkout`);
        process.chdir('..');
        console.log('[GIT] Clone done');
    } catch (e) {
        console.log('[GIT] Already cloned so we pull instead');
        process.chdir(TMP_PATH);
        await exec('git pull');
        process.chdir('..');
        console.log('[GIT] Pull done');
    }
}

/**
 * Deduce the name of the svg file by its path:
 *
 *   - If the path start by `packages` it means that the file is from the BLUI library and we can use the file name
 *     (ex: packages\svg\eaton.svg => eaton)
 *
 *   - If the path starts by `material-design-icons` it means that the file is from Material Design and we can use the folder name
 *     (ex: material-design-icons\src\social\recycling\materialicons\24px.svg => recycline)
 *
 * @param string file
 * @returns the name of the svg
 */
function getSvgName(file) {
    const pieces = file.split(/[/\\]+/);
    if (file.startsWith(TMP_PATH)) {
        // Material icon
        return pieces[pieces.length - 3].toLowerCase() ?? '';
    } else {
        // BLUI icon
        return lodash.first(lodash.last(pieces).split('.')).toLowerCase() ?? '';
    }
}

/**
 * Generate a dictionary will all the icons grouped by family.
 * We reading two folder:
 *   - . => the brightlayer icons
 *   - ./material-design-icons => the material design icons
 *
 * Ex:
 * toggle: {
 *   check_box_outline_blank: 'material-design-icons/src/toggle/check_box_outline_blank/materialicons/24px.svg',
 *   check_box: 'material-design-icons/src/toggle/check_box/materialicons/24px.svg',
 *   toggle_off: 'toggle_off.svg',
 *   toggle_on: 'toggle_on.svg',
 * },
 *
 * @returns an key-value store object
 */
async function generateIconsDictionary() {
    console.log('[Sprites] Build sprites dictionary');

    const dictionary = {};

    // Material Icons
    const materialGroups = await readdir(TMP_SRC_PATH);
    for (const group of materialGroups) {
        dictionary[group] = {};

        const files = glob.sync(`${TMP_SRC_PATH}${group}/**/materialicons/*.svg`);
        for (const file of files) {
            const svgName = getSvgName(file);
            dictionary[group][svgName] = file;
        }
    }

    // Brightlayer Icons
    const json = await readFile(BLUI_SVG_INDEX, { encoding: 'utf-8' });
    const obj = JSON.parse(json);

    for (const icon of obj.icons) {
        const familyList = icon.family;
        for (const family of familyList) {
            const familyName = family.toLowerCase();
            if (dictionary[familyName] === undefined) {
                dictionary[familyName] = {};
            }
            const iconName = lodash.first(icon.filename.split('.'));
            if (iconName) {
                dictionary[familyName][iconName] = icon.filename;
            }
        }
    }

    return dictionary;
}

/**
 * Generate the sprites files according to the dictionary passed in parameter (see generateIconsDictionary function).
 * @param object dictionary
 */
async function generateSprites(dictionary) {
    console.log('[Sprites] Generate sprites');

    const promises = [];

    for (const group of lodash.keys(dictionary)) {
        const spriter = new SVGSpriter({
            dest: OUT_PATH,
            shape: {
                id: {
                    generator: (svg) => {
                        return getSvgName(svg);
                    },
                },
            },
            mode: {
                symbol: true,
            },
        });

        for (const file of lodash.keys(dictionary[group])) {
            const pathFile = dictionary[group][file];
            const fileContent = await readFile(pathFile, 'utf-8');
            spriter.add(pathFile, pathFile, fileContent);
        }

        spriter.compile(async (_error, result, _data) => {
            promises.push(writeFile(`${OUT_PATH}${group}.svg`, result.symbol.sprite.contents));
        });

        await Promise.all(promises);
    }
}

/**
 * Generate icons enums file (icons.ts) related to the sprites.
 */
async function createIconsEnums() {
    console.log('[Sprites] Generate sprite enums');

    const sprites = glob.sync(`${OUT_PATH}*.svg`);
    const icons = [];
    const types = [];

    for (const file of sprites) {
        const extension = path.extname(file);
        const fileName = path.basename(file, extension);

        types.push(`BluiIcons.${lodash.upperFirst(fileName)}`);

        const $ = await readXmlFile(file);

        const ids = $('symbol')
            .toArray()
            .map((element) => {
                const id = $(element).attr('id');
                let camelCaseId = lodash.camelCase(id);
                if (camelCaseId !== undefined && /^\d/.test(camelCaseId.charAt(0))) {
                    camelCaseId = `_${camelCaseId}`;
                }

                return ` ${lodash.upperFirst(camelCaseId)} = '${fileName}${extension}#${id}',`;
            });

        const uniqueIds = lodash.uniq(ids);

        icons.push(`export enum ${lodash.upperFirst(fileName)} \{\n${uniqueIds.join('\n')}\n \}\n`);
    }

    await writeFile(
        `${OUT_PATH}index.ts`,
        [
            `// This file is automatically generated shouldn't be modified by hands.`,
            `/* eslint-disable @typescript-eslint/no-shadow */`,
            `export type BluiIcon = ${types.join('|')};`,
            `export namespace BluiIcons {`,
            ...icons,
            `}`,
        ].join('\n')
    );
}

/**
 * Read an xml file using cheerio library (https://cheerio.js.org/).
 * @param string filePath
 * @returns
 */
async function readXmlFile(filePath) {
    const content = await readFile(filePath, { encoding: 'utf-8' });
    return cheerio.load(content, { xmlMode: true, decodeEntities: false });
}

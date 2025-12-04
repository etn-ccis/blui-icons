const path = require('path');

function bluiIndexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
        let basename;

        if (path.basename(filePath, path.extname(filePath)) === 'EvPlugIec62196T3A') {
            basename = 'EvPlugIec62196T3a';
        } else if (path.basename(filePath, path.extname(filePath)) === 'EvPlugIec62196T3C') {
            basename = 'EvPlugIec62196T3c';
        } else {
            basename = path.basename(filePath, path.extname(filePath));
        }
        const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
        return `export { default as ${exportName} } from './${basename}'`;
    });
    return exportEntries.join('\n');
}

module.exports = bluiIndexTemplate;

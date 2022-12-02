const path = require('path');

function bluiIndexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
        if (path.basename(filePath, path.extname(filePath)) === 'EvPlugIec62196T3A') {
            const basename = 'EvPlugIec62196T3a';
            const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
            return `export { default as ${exportName} } from './${basename}'`;
        } else if (path.basename(filePath, path.extname(filePath)) === 'EvPlugIec62196T3C') {
            const basename = 'EvPlugIec62196T3c';
            const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
            return `export { default as ${exportName} } from './${basename}'`;
        } else {
            const basename = path.basename(filePath, path.extname(filePath));
            const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
            return `export { default as ${exportName} } from './${basename}'`;
        }
    });
    return exportEntries.join('\n');
}

module.exports = bluiIndexTemplate;

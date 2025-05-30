const fs = require('fs');

console.log('Generating glyphmaps...');

const codepoints = fs.readFileSync('./glyphmaps/MaterialSymbolsOutlined.codepoints', { encoding: 'utf8' }).split('\n');

const glyphMap = {};
codepoints.forEach((point) => {
    const parts = point.split(' ');
    if (parts[0] && parts[1]) {
        glyphMap[parts[0].replace(/_/g, '-')] = Number.parseInt(parts[1], 16);
    }
});

fs.writeFileSync('./glyphmaps/MaterialSymbols.json', JSON.stringify(glyphMap, null, 4), 'utf8');

console.log('Generating glyphmaps: COMPLETE');

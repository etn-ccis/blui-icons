/**
 * Builds the React Native icon font from ../svg with the invisible 24x24 bounding
 * rectangle re-added to every icon (it is no longer stored in the source SVGs).
 * Codepoints are taken from the icon-font glyph map so they stay identical.
 */
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { generateFonts } = require('fantasticon');

const NAME = 'BrightlayerUIIcons';
const BOUNDING_RECT = '<rect width="24" height="24" fill="none"/>';
const FONT_HEIGHT = 300;
const SVG_DIR = path.resolve(__dirname, '../../svg');
const CODEPOINTS = path.resolve(__dirname, `../../icon-font/${NAME}.json`);
const FONTS_DIR = path.resolve(__dirname, '../Fonts');
const GLYPHMAPS_DIR = path.resolve(__dirname, '../GlyphMaps');

// Slashed SVGs keep a huge clipPath in <defs>; the font tool turns it into outline, inflating font bounds.
const stripDefs = (svg) => svg.replace(/<defs>[\s\S]*?<\/defs>/g, '');

const addBoundingRect = (svg) =>
    svg.includes(BOUNDING_RECT) ? svg : svg.replace(/<\/svg>\s*$/, `${BOUNDING_RECT}</svg>`);

const checksum = (buf, start, length) => {
    let sum = 0;
    for (let i = 0; i < length; i += 4) {
        const word = Buffer.concat([buf.subarray(start + i, start + Math.min(i + 4, length)), Buffer.alloc(4)]);
        sum = (sum + word.readUInt32BE(0)) >>> 0;
    }
    return sum;
};

// Android sizes text lines from the head-table bounds; the wide Eaton logo slashes extend them far past the em box.
const clampVerticalMetrics = (buf, unitsPerEm) => {
    const tables = {};
    for (let i = 0; i < buf.readUInt16BE(4); i++) {
        const entry = 12 + i * 16;
        tables[buf.toString('ascii', entry, entry + 4)] = { entry, offset: buf.readUInt32BE(entry + 8) };
    }
    const { head, 'OS/2': os2 } = tables;
    buf.writeInt16BE(Math.max(buf.readInt16BE(head.offset + 38), 0), head.offset + 38); // yMin
    buf.writeInt16BE(Math.min(buf.readInt16BE(head.offset + 42), unitsPerEm), head.offset + 42); // yMax
    buf.writeUInt16BE(Math.min(buf.readUInt16BE(os2.offset + 74), unitsPerEm), os2.offset + 74); // usWinAscent
    buf.writeUInt16BE(0, os2.offset + 76); // usWinDescent

    buf.writeUInt32BE(0, head.offset + 8);
    for (const { entry, offset } of [head, os2]) {
        const length = buf.readUInt32BE(entry + 12);
        buf.writeUInt32BE(checksum(buf, offset, length), entry + 4);
    }
    buf.writeUInt32BE((0xb1b0afba - checksum(buf, 0, buf.length)) >>> 0, head.offset + 8);
    return buf;
};

const main = async () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'blui-rn-font-'));
    try {
        const inputDir = path.join(tmp, 'svg');
        const outputDir = path.join(tmp, 'out');
        fs.mkdirSync(inputDir);
        fs.mkdirSync(outputDir);

        for (const file of fs.readdirSync(SVG_DIR).filter((f) => f.endsWith('.svg'))) {
            fs.writeFileSync(
                path.join(inputDir, file),
                addBoundingRect(stripDefs(fs.readFileSync(path.join(SVG_DIR, file), 'utf8')))
            );
        }

        await generateFonts({
            inputDir,
            outputDir,
            name: NAME,
            prefix: 'blui',
            fontTypes: ['ttf'],
            assetTypes: ['json'],
            normalize: true,
            fontHeight: FONT_HEIGHT,
            codepoints: JSON.parse(fs.readFileSync(CODEPOINTS, 'utf8')),
        });

        fs.mkdirSync(FONTS_DIR, { recursive: true });
        fs.mkdirSync(GLYPHMAPS_DIR, { recursive: true });
        const font = fs.readFileSync(path.join(outputDir, `${NAME}.ttf`));
        fs.writeFileSync(path.join(FONTS_DIR, `${NAME}.ttf`), clampVerticalMetrics(font, FONT_HEIGHT));
        fs.copyFileSync(path.join(outputDir, `${NAME}.json`), path.join(GLYPHMAPS_DIR, `${NAME}.json`));
    } finally {
        fs.rmSync(tmp, { recursive: true, force: true });
    }
};

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

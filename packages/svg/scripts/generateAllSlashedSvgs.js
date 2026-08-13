#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { applySlashMask } = require('./slashUtils');

// Files to skip — the overlay itself, the base slash glyph, and any already-slashed files
const SKIP_FILES = new Set(['slash_overlay.svg', 'slash_only.svg']);
const svgDir = path.resolve(__dirname, '..');

const files = fs.readdirSync(svgDir).filter((f) => {
    if (!f.endsWith('.svg')) return false;
    if (SKIP_FILES.has(f)) return false;
    if (f.endsWith('_slashed.svg')) return false;
    return true;
});

if (files.length === 0) {
    console.log('No SVG files found to process.');
    process.exit(0);
}

let generated = 0;
let skipped = 0;

for (const file of files) {
    const inputPath = path.join(svgDir, file);
    const parsed = path.parse(file);
    const outputPath = path.join(svgDir, `${parsed.name}_slashed${parsed.ext}`);

    const svg = fs.readFileSync(inputPath, 'utf8');

    if (!svg.includes('<svg') || !svg.includes('</svg>')) {
        console.warn(`Skipping invalid SVG: ${file}`);
        skipped++;
        continue;
    }

    const result = applySlashMask(svg);

    fs.writeFileSync(outputPath, result, 'utf8');
    generated++;
}

console.log(`Done. Generated ${generated} slashed SVGs, skipped ${skipped}.`);

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { applyDarkVariant } = require('./darkVariantUtils');

const svgDir = path.resolve(__dirname, '..');

const files = fs.readdirSync(svgDir).filter((file) => {
    if (!file.endsWith('.svg')) return false;
    if (file.endsWith('_dark.svg')) return false;
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
    const outputPath = path.join(svgDir, `${parsed.name}_dark${parsed.ext}`);
    const svg = fs.readFileSync(inputPath, 'utf8');

    if (!svg.includes('<svg') || !svg.includes('</svg>')) {
        console.warn(`Skipping invalid SVG: ${file}`);
        skipped++;
        continue;
    }

    fs.writeFileSync(outputPath, applyDarkVariant(svg), 'utf8');
    generated++;
}

console.log(`Done. Generated ${generated} dark SVGs, skipped ${skipped}.`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DEFAULT_SLASH_COLOR = '#727E84';

// Files to skip — the overlay itself, and any already-slashed files
const SKIP_FILES = new Set(['slash_overlay.svg']);

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

// Filled polygon equivalent of a stroke-width:2 diagonal line at 45°.
// Corners are offset ±1px perpendicular to the line direction (-0.7071, 0.7071).
const slashGroup = `\n  <g data-name="slash-overlay">\n    <path d="M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z" fill="${DEFAULT_SLASH_COLOR}"/>\n  </g>\n`;
const existingSlashRegex = /\n\s*<g data-name="slash-overlay">[\s\S]*?<\/g>\n?/;

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

    const cleanedSvg = svg.replace(existingSlashRegex, '\n');
    const result = cleanedSvg.replace('</svg>', `${slashGroup}</svg>`);

    fs.writeFileSync(outputPath, result, 'utf8');
    generated++;
}

console.log(`Done. Generated ${generated} slashed SVGs, skipped ${skipped}.`);

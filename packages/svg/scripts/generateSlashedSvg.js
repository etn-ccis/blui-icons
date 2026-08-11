#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DEFAULT_SLASH_COLOR = '#727E84';

const usage = `Usage:\n  node scripts/generateSlashedSvg.js --input <input.svg> [--output <output.svg>] [--overwrite]\n\nOptions:\n  --input       Source SVG path (required)\n  --output      Destination SVG path (default: <input>_slashed.svg)\n  --overwrite   Overwrite the input file\n`;

const args = process.argv.slice(2);

const getArg = (name) => {
    const index = args.indexOf(name);
    if (index === -1 || index === args.length - 1) return undefined;
    return args[index + 1];
};

const hasFlag = (name) => args.includes(name);

const input = getArg('--input');
if (!input) {
    console.error(usage);
    process.exit(1);
}

const resolvedInput = path.resolve(process.cwd(), input);
if (!fs.existsSync(resolvedInput)) {
    console.error(`Input file not found: ${resolvedInput}`);
    process.exit(1);
}

const overwrite = hasFlag('--overwrite');
const output = getArg('--output');

let resolvedOutput;
if (overwrite) {
    resolvedOutput = resolvedInput;
} else if (output) {
    resolvedOutput = path.resolve(process.cwd(), output);
} else {
    const parsed = path.parse(resolvedInput);
    resolvedOutput = path.join(parsed.dir, `${parsed.name}_slashed${parsed.ext}`);
}

const svg = fs.readFileSync(resolvedInput, 'utf8');

if (!svg.includes('<svg') || !svg.includes('</svg>')) {
    console.error('Input does not appear to be a valid SVG file.');
    process.exit(1);
}

// Filled polygon equivalent of a stroke-width:2 diagonal line at 45°.
// Corners are offset ±1px perpendicular to the line direction (-0.7071, 0.7071).
// White polygon is shifted +1px in the (0.7071, -0.7071) direction (above the grey line).
const slashGroup = `\n  <g data-name="slash-overlay">\n    <path d="M5.22 3.21 L3.80 4.63 L19.40 20.23 L20.82 18.81 Z" fill="#FFFFFF"/>\n    <path d="M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z" fill="${DEFAULT_SLASH_COLOR}"/>\n  </g>\n`;

const existingSlashRegex = /\n\s*<g data-name="slash-overlay">[\s\S]*?<\/g>\n?/;
const cleanedSvg = svg.replace(existingSlashRegex, '\n');

const result = cleanedSvg.replace('</svg>', `${slashGroup}</svg>`);

fs.writeFileSync(resolvedOutput, result, 'utf8');

console.log(`Generated slashed SVG: ${resolvedOutput}`);
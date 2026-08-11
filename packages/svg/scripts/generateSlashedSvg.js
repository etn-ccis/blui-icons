#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { applySlashMask } = require('./slashUtils');

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

const result = applySlashMask(svg);

fs.writeFileSync(resolvedOutput, result, 'utf8');

console.log(`Generated slashed SVG: ${resolvedOutput}`);
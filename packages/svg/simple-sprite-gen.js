const { readFile, writeFile, mkdir } = require('node:fs/promises');
const path = require('node:path');
const SVGSpriter = require('svg-sprite');

const OUT_PATH = 'sprites/';
const BLUI_SVG_INDEX = 'index.json';

async function main() {
    // Create sprites directory
    await mkdir(OUT_PATH, { recursive: true });

    // Read the index.json file
    const indexData = JSON.parse(await readFile(BLUI_SVG_INDEX, 'utf8'));

    // Group icons by family
    const dictionary = {};

    for (const icon of indexData.icons) {
        for (const family of icon.family) {
            if (!dictionary[family]) {
                dictionary[family] = {};
            }
            const iconName = path.parse(icon.filename).name;
            dictionary[family][iconName] = icon.filename;
        }
    }

    // Generate sprites for each family
    await generateSprites(dictionary);

    // Generate TypeScript enums
    await createIconsEnums(dictionary);

    console.log('Sprite generation completed successfully!');
}

async function generateSprites(dictionary) {
    for (const [family, icons] of Object.entries(dictionary)) {
        const spriter = new SVGSpriter({
            mode: {
                symbol: {
                    dest: '',
                    sprite: `${family.toLowerCase()}.svg`,
                },
            },
        });

        for (const [iconName, filePath] of Object.entries(icons)) {
            try {
                const svgContent = await readFile(filePath, 'utf8');
                // Use just the filename and sanitize the icon name for SVG ID
                const sanitizedIconName = iconName.replace(/[^a-zA-Z0-9_-]/g, '_');
                spriter.add(path.basename(filePath), sanitizedIconName, svgContent);
            } catch (error) {
                console.warn(`Warning: Could not read ${filePath}:`, error.message);
            }
        }

        const { result } = await spriter.compileAsync();
        const spriteContent = result.symbol.sprite.contents;

        await writeFile(path.join(OUT_PATH, `${family.toLowerCase()}.svg`), spriteContent);
        console.log(`Generated sprite for ${family} family`);
    }
}

async function createIconsEnums(dictionary) {
    let enumContent = '// Auto-generated file - do not edit\n\n';

    // Generate individual enums for each family
    for (const [family, icons] of Object.entries(dictionary)) {
        const familyName = family.charAt(0).toUpperCase() + family.slice(1);
        enumContent += `export enum ${familyName}Icon {\n`;

        for (const iconName of Object.keys(icons)) {
            const enumKey = iconName.replace(/^(\d)/, '_$1').replace(/[^a-zA-Z0-9_]/g, '_');
            enumContent += `    ${enumKey} = '${family.toLowerCase()}.svg#${iconName}',\n`;
        }

        enumContent += '}\n\n';
    }

    // Generate union type
    const familyTypes = Object.keys(dictionary).map(
        (family) => `${family.charAt(0).toUpperCase() + family.slice(1)}Icon`
    );
    enumContent += `export type BluiIcon = ${familyTypes.join(' | ')};\n`;

    await writeFile(path.join(OUT_PATH, 'index.ts'), enumContent);
    console.log('Generated TypeScript enums');
}

main().catch(console.error);

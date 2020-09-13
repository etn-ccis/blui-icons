// from the root folder, run `node ./scripts/removeBoundingBox.js`

const folder = './design/';
const fs = require('fs');
const path = require('path');

async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}

async function main() {
    for await (const doc of walk(folder)) {
        if (doc.slice(doc.length - 4) === '.svg') {
            const data = fs.readFileSync(doc, { encoding: 'utf-8', flag: 'r' });
            const sanitizedData = data
                .replace(/<rect width="24" height="24" fill="none"\/>/g, '')
                .replace(
                    /<rect width="24" height="24" fill="none" stroke="#000" stroke-width="0" opacity="0.01"\/>/g,
                    ''
                )
                .replace(
                    /<rect width="24" height="24" transform="translate\(24 24\) rotate\(-180\)" fill="none"\/>/g,
                    ''
                )
                .replace(/<path d="M24,0V24H0V0Z" fill="none"\/>/g, '');
            fs.writeFileSync(doc, sanitizedData, { encoding: 'utf-8', flag: 'w' });
        }
    }
    console.log('Success!');
}
main();

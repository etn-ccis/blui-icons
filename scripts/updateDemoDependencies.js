const fs = require('fs');
// const fileName = './file.json';
// const dependencies = [
//     {package: '@brightlayer-ui/icons', file: './packages/icon-font/package.json'},
//     {package: '@brightlayer-ui/icons-mui', file: './packages/mui/package.json'},
//     {package: '@brightlayer-ui/icons-svg', file: './packages/svg/package.json'},
// ]
// const file = require(fileName);

// file.key = "new value";

console.log('Updating demo dependency versions');
const demoJson = JSON.parse(fs.readFileSync('./demos/react-demo/package.json'));
const fontVersion = JSON.parse(fs.readFileSync('./packages/icon-font/package.json')).version;
const muiVersion = JSON.parse(fs.readFileSync('./packages/mui/package.json')).version;
const svgVersion = JSON.parse(fs.readFileSync('./packages/svg/package.json')).version;

demoJson.dependencies['@brightlayer-ui/icons'] = fontVersion;
demoJson.dependencies['@brightlayer-ui/icons-mui'] = muiVersion;
demoJson.dependencies['@brightlayer-ui/icons-svg'] = svgVersion;

fs.writeFileSync('./demos/react-demo/package.json', JSON.stringify(demoJson, null, 4), "utf8");

console.log('Updating demo dependency versions: COMPLETE');

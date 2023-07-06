const fs = require('fs');

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

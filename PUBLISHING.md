# Publishing Instructions

To update the version @pxblue/icons version number, edit the version in `package.json`. 
To update the version @pxblue/symbols version number, edit the version in `symbols/package.json`. 
To update the version @pxblue/icons-svg version number, edit the version in `svg/package.json`. 

To publish a new package through NPM, run the following commands from the root folder: 

### @pxblue/icons
```
yarn build:all
npm publish --tag <alpha | beta>
```

### @pxblue/icons-svg
```
yarn build:all
cd svg
npm publish --tag <alpha | beta>
```

### @pxblue/symbols
```
yarn build:all
cd symbols
npm publish --tag <alpha | beta>
```

> The above commands should only be run for `alpha` or `beta` packages.  This repo's CircleCI will automatically publish latest packages from the master branch. 

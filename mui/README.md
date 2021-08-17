
[![](https://img.shields.io/circleci/project/github/pxblue/icons/mui/master.svg?style=flat)](https://circleci.com/gh/pxblue/icons/tree/master)
![npm](https://img.shields.io/npm/v/@pxblue/icons-mui?label=%40pxblue/icons-mui)

# PX Blue Icons for Material-UI

This library contains componentized svg icons from [@pxblue/icons](https://github.com/pxblue/icons) for use in React applications using Material UI. The icons are made available in the same way that Material UI exposes the [Material Icons](https://material-ui.com/style/icons/#svg-material-icons).

## Installation

To install the PX Blue mui icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @pxblue/icons-mui
or
yarn add @pxblue/icons-mui
```

> **NOTE (Peer Dependencies):** Using this package requires you to have @material-ui/core and @material-ui/icons defined as dependencies in your project's package.json file.

## Usage

### Angular

This package is intended for use only in React applications. For a way to link svg icons for use in Angular applications, see [@pxblue/icons](https://github.com/pxblue/icons).

### React

Once you have installed the npm module, you can import the icon components into your application as follows:

```
import myIcon from '@pxblue/icons-mui/MyIcon';
...
<myIcon></myIcon>
```

If you are importing multiple icons, you can save some space by using named imports from the package root:

```
import {FirstIcon, SecondIcon, ThirdIcon} from '@pxblue/icons-mui';
```

### Applying Different Colors

To change the color of the icon you are using, simply set the CSS color property. This property is inheritable, so if the property is not set on your icon, it will be inherited from the parent container.

```
<FirstIcon style={{color: 'red'}}></FirstIcon>
```

## Available Icons

See the [Iconography](https://pxblue.github.io/style/iconography) on pxblue.github.io for a list of currently available icons.

> **NOTE**: When using this package, icon names are in TitleCase (e.g., bypass_battery --> BypassBattery).

## Building Icon Set (for contributors)

To build the icons-mui package (e.g., after new icons are added to PX Blue):

```
git clone https://github.com/pxblue/icons-mui
cd icons-mui
yarn build:full
```

This will populate the /icons directory with all of the icon components as well as copy over necessary files for publishing (Readme, package.json, etc.).

> When building the icons-mui package, it imports the latest icons from the @pxblue/icons-svg package, so when new icons are added, @pxblue/icons-svg must be published to NPM before this package can be updated.

### Publishing

To publish the package:

```
yarn build:full
cd icons
npm version < patch | minor | major >
npm publish
```

> **NOTE:** This package must be published from the /icons directory, not the root directory.

## Browser Support

PX Blue Icons for Material-UI will work with any modern browser. For details refer to our [Browser Support](https://pxblue.github.io/development/frameworks-web/react#browser-support) documentation.

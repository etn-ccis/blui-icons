[![](https://img.shields.io/circleci/project/github/brightlayer-ui/icons/mui/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/icons/tree/master)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/icons-mui?label=%40brightlayer-ui/icons-mui)

# Brightlayer UI Icons for Material-UI

This library contains componentized svg icons from [@brightlayer-ui/icons](https://github.com/brightlayer-ui/icons) for use in React applications using Material UI. The icons are made available in the same way that Material UI exposes the [Material Icons](https://mui.com/components/material-icons/#heading-api).

## Installation

To install the Brightlayer UI mui icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @brightlayer-ui/icons-mui
or
yarn add @brightlayer-ui/icons-mui
```

> **NOTE (Peer Dependencies):** Using this package requires you to have @mui/material and @mui/icons-material defined as dependencies in your project's package.json file.

## Usage

### Angular

This package is intended for use only in React applications. For a way to link svg icons for use in Angular applications, see [@brightlayer-ui/icons](https://github.com/brightlayer-ui/icons).

### React

Once you have installed the npm module, you can import the icon components into your application as follows:

```
import myIcon from '@brightlayer-ui/icons-mui/MyIcon';
...
<myIcon></myIcon>
```

If you are importing multiple icons, you can save some space by using named imports from the package root:

```
import {FirstIcon, SecondIcon, ThirdIcon} from '@brightlayer-ui/icons-mui';
```

### Applying Different Colors

To change the color of the icon you are using, simply set the CSS color property. This property is inheritable, so if the property is not set on your icon, it will be inherited from the parent container.

```
<FirstIcon style={{color: 'red'}}></FirstIcon>
```

## Available Icons

See the [Iconography](https://brightlayer-ui.github.io/style/iconography) on brightlayer-ui.github.io for a list of currently available icons.

> **NOTE**: When using this package, icon names are in TitleCase (e.g., bypass_battery --> BypassBattery).

## Building Icon Set (for contributors)

To build the icons-mui package (e.g., after new icons are added to Brightlayer UI):

```
git clone https://github.com/brightlayer-ui/icons-mui
cd icons-mui
yarn build:full
```

This will populate the /icons directory with all of the icon components as well as copy over necessary files for publishing (Readme, package.json, etc.).

> When building the icons-mui package, it imports the latest icons from the @brightlayer-ui/icons-svg package, so when new icons are added, @brightlayer-ui/icons-svg must be published to NPM before this package can be updated.

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

Brightlayer UI Icons for Material-UI will work with any modern browser. For details refer to our [Browser Support](https://brightlayer-ui.github.io/development/frameworks-web/react#browser-support) documentation.

[![Build](https://github.com/etn-ccis/blui-icons/actions/workflows/blui-ci.yml/badge.svg?branch=master)](https://github.com/etn-ccis/blui-icons/actions/workflows/blui-ci.yml)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/icons-hmi?label=%40brightlayer-ui/icons-hmi)

# Brightlayer UI HMI Icons for MUI

This library contains HMI (Human-Machine Interface) svg icons from [@brightlayer-ui/icons](https://github.com/etn-ccis/blui-icons) for use in React applications using MUI. The icons are made available in the same way that MUI exposes the [Material Icons](https://mui.com/components/icons/).

## Installation

To install the Brightlayer UI HMI icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @brightlayer-ui/icons-hmi
or
yarn add @brightlayer-ui/icons-hmi
```

> **NOTE (Peer Dependencies):** Using this package requires you to have @mui/material and @mui/icons-material defined as dependencies in your project's package.json file.

## Usage

### React

Once you have installed the npm module, you can import the icon components into your application as follows:

```
import myIcon from '@brightlayer-ui/icons-hmi/MyIcon';
...
<myIcon></myIcon>
```

If you are importing multiple icons, you can save some space by using named imports from the package root:

```
import {LockUnlocked} from '@brightlayer-ui/icons-hmi';
```

### Applying Different Colors

To change the color of the icon you are using, simply set the CSS color property. This property is inheritable, so if the property is not set on your icon, it will be inherited from the parent container.

```
<LockUnlocked style={{color: 'red'}}></LockUnlocked>
```

## Available Icons

HMI specific icons for industrial control applications.

> **NOTE**: When using this package, icon names are in TitleCase (e.g., lock_unlocked --> LockUnlocked).

## Building Icon Set (for contributors)

To build the icons-hmi package:

```
git clone https://github.com/etn-ccis/blui-icons
cd packages/hmi
yarn build
```

This will populate the /dist folder with all of the icon components as well as copy over necessary files for publishing (Readme, package.json, etc.).

### Publishing

To publish the package:

```
yarn build
cd dist
npm version < patch | minor | major >
npm publish
```

> **NOTE:** This package must be published from the /dist folder, not the root directory.

## Browser Support

Brightlayer UI Icons for MUI will work with any modern browser. For details refer to our [Browser Support](https://brightlayer-ui.github.io/development/frameworks-web/react#browser-support) documentation.

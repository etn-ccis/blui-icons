# Brightlayer UI Supplemental Icons

[![](https://img.shields.io/npm/v/@brightlayer-ui/icons.svg?label=@brightlayer-ui/icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons)
[![](https://img.shields.io/npm/v/@brightlayer-ui/icons-svg.svg?label=@brightlayer-ui/icons-svg&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/icons/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/icons/tree/master)

This is a library of supplemental icons, to be used in conjunction with the standard Material Design icons in Brightlayer UI applications.

## Installation

To install the Brightlayer UI icon font from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @brightlayer-ui/icons
or
yarn add @brightlayer-ui/icons
```

You then need to reference the font in your application so that it is available for use.

#### Angular

In order to use the icon font, you will need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the icon font reference:

```
"styles": [
    "src/styles.scss",
    "./node_modules/@brightlayer-ui/icons/iconfont/BrightlayerUIIcons.css"
],
```

#### React

For React, you'll need to require the font in your top-level JS file (typically index.js).

```
require('@brightlayer-ui/icons/iconfont/BrightlayerUIIcons.css');
```

## Using the icon font in your application

This will make the Brightlayer UI icons available to your code by using the appropriate class name (className for React) on a `<i>` element, e.g.:

```
<i class="blui-ICONNAME"></i>
```

### Applying Different Colors

To change the color of the icon you are using, simply set the CSS color property. This property is inheritable, so if the property is not set on your icon, it will be inherited from the parent container.

```
<i class="blui-ICONNAME" style="color: red"></i>
```

### Available Icons

See the [Iconography](https://brightlayer-ui.github.io/style/iconography) on brightlayer-ui.github.io for a list of currently available icons.

## Usage Alternatives

The icon font is a great way to include lots of icons in your application. If you only need a few, you can also check out these alternative packages:

-   [SVG Icons](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
-   [React Components](https://www.npmjs.com/package/@brightlayer-ui/icons-mui)
-   [React Native Vector Icons](https://www.npmjs.com/package/@brightlayer-ui/react-native-vector-icons)

We also have Brightlayer UI one-line symbols (ported from Brightlayer UI 1.0) available:

-   [SVG Symbols](https://www.npmjs.com/package/@brightlayer-ui/symbols)
-   [React Components](https://www.npmjs.com/package/@brightlayer-ui/symbols-mui)

Our library of dynamic progress icons has been split off into a dedicated repository:

-   [Progress Icons](https://github.com/brightlayer-ui/progress-icons/tree/master)

# For Icon Creators

Please read the instructions in the [Design](https://github.com/brightlayer-ui/icons/blob/master/design/README.md) folder before creating or submitting new icons.

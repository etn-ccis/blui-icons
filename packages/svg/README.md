# Brightlayer UI SVG Icons and Supplemental Icons

[![](https://img.shields.io/npm/v/@brightlayer-ui/icons-svg.svg?label=@brightlayer-ui/icons-svg&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
[![](https://img.shields.io/npm/v/@brightlayer-ui/icons.svg?label=@brightlayer-ui/icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons)
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/icons/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/icons/tree/master)

This is a library of SVG Icons and supplemental icons, to be used in conjunction with the standard Material Design icons in Brightlayer UI applications.

## Installation

To install the Brightlayer UI SVG Icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @brightlayer-ui/icons-svg
or
yarn add @brightlayer-ui/icons-svg
```

To install the Brightlayer UI icon font from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @brightlayer-ui/icons
or
yarn add @brightlayer-ui/icons
```

You then need to reference the font in your application so that it is available for use.

## Angular

The method described below for Angular requires you to install the Angular CDK and Angular Material:

```
cd projectname
yarn add @angular/cdk @angular/material
```

and also include the following modules:

```
// app.module.ts
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
...
imports:[
  MatIconModule,
  HttpClientModule
]
```

### SVG Icons Angular Usage

The simplest way to use these SVGs in Angular is to register them with the matIconRegistry so they can be used with the `<mat-icon>` tag. You can register icons individually, or as the entire Brightlayer UI set:

```
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

declare var require: any;
const icon = require("@brightlayer-ui/icons-svg/breaker.svg").default; // individual icon
const iconSet = require("@brightlayer-ui/icons-svg/icons.svg").default; // full set
```

Then, in your constructor, register the icon or the icon set. It will then be available for use as a `<mat-icon>`.

#### Individual Icon

```
// app.component.ts
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "breaker",
      this.domSanitizer.bypassSecurityTrustResourceUrl(icon)
    );
  }
}
```

```
// app.component.html
<mat-icon svgIcon="breaker"></mat-icon>
```

#### Entire Icon Set

```
// app.component.ts
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace('blui-icons', this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet));
  }
}
```

```
// app.component.ts
<mat-icon svgIcon="blui-icons:bearing"></mat-icon>
```

#### Applying Different Colors

To change the color of the icon you are using, simply set the CSS color property. This property is inheritable, so if the property is not set on your icon, it will be inherited from the parent container.

```
<mat-icon svgIcon="blui-icons:bearing" style="color: red"></mat-icon>
```

### Icon Font Angular Usage

In order to use the icon font, you will need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the icon font reference:

```
"styles": [
    "src/styles.scss",
    "./node_modules/@brightlayer-ui/icons/iconfont/BrightlayerUIIcons.css"
],
```

## React

### SVG Icons React Usage

```
import icon from '@brightlayer-ui/icons-svg/ICON_NAME.svg';
...
<img src={icon}/>
```

> NOTE: SVG icons used in this manner will appear black. The fill color cannot be changed because the SVGs are not inline. If you want to color the icons, you will want to use the [@brightlayer-ui/icons-mui](https://www.npmjs.com/package/@brightlayer-ui/icons-mui) or our [icon font](https://www.npmjs.com/package/@brightlayer-ui/icons).

> NOTE: If you will be using many of these icons in your application, we recommend you use [@brightlayer-ui/icons-mui](https://www.npmjs.com/package/@brightlayer-ui/icons-mui) or our [icon font](https://www.npmjs.com/package/@brightlayer-ui/icons) to simplify usage. This library makes more sense if you just need one or two icons or if you want to reduce the size of your bundle.

### Icon Font React Usage

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

## React-Native

React Native does not have built in support for SVG images. However, there are libraries available that will make them usable in your application. We recommend using [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) in conjuction with [react-native-svg](https://github.com/react-native-community/react-native-svg). These will allow you to include Brightlayer UI SVG icons by importing and using them as normal components:

```
import Leaf from "@brightlayer-ui/icons-svg/leaf.svg";
...
<Leaf width={50} height={50} fill={'green'} />
```

## SVG Icons Usage Alternatives

The icon font is a great way to include lots of icons in your application. If you only need a few, you can also check out these alternative packages:

-   [SVG Icons](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
-   [React Components](https://www.npmjs.com/package/@brightlayer-ui/icons-mui)
-   [React Native Vector Icons](https://www.npmjs.com/package/@brightlayer-ui/react-native-vector-icons)

We also have Brightlayer UI one-line symbols (ported from Brightlayer UI 1.0) available:

-   [SVG Symbols](https://www.npmjs.com/package/@brightlayer-ui/symbols)
-   [React Components](https://www.npmjs.com/package/@brightlayer-ui/symbols-mui)

Our library of dynamic progress icons has been split off into a dedicated repository:

-   [Progress Icons](https://github.com/brightlayer-ui/progress-icons/tree/master)

## Available Icons

See the [Iconography](https://brightlayer-ui.github.io/style/iconography) on brightlayer-ui.github.io for a list of currently available icons.

## For Icon Creators

Please read the instructions in the [Design](https://github.com/brightlayer-ui/icons/blob/master/design/README.md) folder before creating or submitting new icons.

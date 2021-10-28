# Brightlayer UI SVG Icons
[![](https://img.shields.io/npm/v/@brightlayer-ui/icons-svg.svg?label=@brightlayer-ui/icons-svg&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/icons/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/icons/tree/master)


This is a library of SVG Icons for use in Brightlayer UI applications.

## Installation
To install the Brightlayer UI SVG Icons from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @brightlayer-ui/icons-svg
or
yarn add @brightlayer-ui/icons-svg
```

### Angular
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

## Usage

### Angular
The simplest way to use these SVGs in Angular is to register them with the matIconRegistry so they can be used with the ```<mat-icon>``` tag. You can register icons individually, or as the entire Brightlayer UI set:

```
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

declare var require: any;
const icon = require("@brightlayer-ui/icons-svg/breaker.svg").default; // individual icon
const iconSet = require("@brightlayer-ui/icons-svg/icons.svg").default; // full set
```

Then, in your constructor, register the icon or the icon set. It will then be available for use as a ```<mat-icon>```.

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

### React
```
import icon from '@brightlayer-ui/icons-svg/ICON_NAME.svg';
...
<img src={icon}/>
```

>NOTE: SVG icons used in this manner will appear black. The fill color cannot be changed because the SVGs are not inline. If you want to color the icons, you will want to use the [@brightlayer-ui/icons-mui](https://www.npmjs.com/package/@brightlayer-ui/icons-mui) or our [icon font](https://www.npmjs.com/package/@brightlayer-ui/icons).

>NOTE: If you will be using many of these icons in your application, we recommend you use [@brightlayer-ui/icons-mui](https://www.npmjs.com/package/@brightlayer-ui/icons-mui) or our [icon font](https://www.npmjs.com/package/@brightlayer-ui/icons) to simplify usage. This library makes more sense if you just need one or two icons or if you want to reduce the size of your bundle.

### React-Native
React Native does not have built in support for SVG images. However, there are libraries available that will make them usable in your application. We recommend using [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) in conjuction with [react-native-svg](https://github.com/react-native-community/react-native-svg). These will allow you to include Brightlayer UI SVG icons by importing and using them as normal components:

```
import Leaf from "@brightlayer-ui/icons-svg/leaf.svg";
...
<Leaf width={50} height={50} fill={'green'} />
```

### Available SVG Icons
See the [Iconography](https://brightlayer-ui.github.io/style/iconography) on brightlayer-ui.github.io for a list of currently available icons.





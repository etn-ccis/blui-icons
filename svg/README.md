# PX Blue SVG Icons
This is a library of SVG Icons for use in PX Blue applications.

## Installation
To install the PX Blue SVG Icons from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/icons-svg
or
yarn add @pxblue/icons-svg
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
The simplest way to use these SVGs in Angular is to register them with the matIconRegistry so they can be used with the ```<mat-icon>``` tag. You can register icons individually, or as the entire PX Blue set:

```
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

declare var require: any;
const icon = require("@pxblue/icons-svg/breaker.svg"); // individual icon
const iconSet = require("@pxblue/icons-svg/icons.svg"); // full set
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
    this.matIconRegistry.addSvgIconSetInNamespace('px-icons', this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet));
  }
}
```

```
// app.component.ts
<mat-icon svgIcon="px-icons:bearing"></mat-icon>
```

### React
```
const icon = require('@pxblue/icons-svg/ICON_NAME.svg');
...
<img src={icon}/>
```

>NOTE: SVG icons used in this manner will appear black. The fill color cannot be changed because the SVGs are not inline. If you want to color the icons, you will want to use the [@pxblue/icons-mui](https://www.npmjs.com/package/@pxblue/icons-mui) or our [icon font](https://www.npmjs.com/package/@pxblue/icons).

>NOTE: If you will be using many of these icons in your application, we recommend you use [@pxblue/icons-mui](https://www.npmjs.com/package/@pxblue/icons-mui) or our [icon font](https://www.npmjs.com/package/@pxblue/icons) to simplify usage. This library makes more sense if you just need one or two icons or if you want to reduce the size of your bundle.

### Available SVG Icons
Currently, we have SVG Icons available for:
* air_filter
* bearing
* breaker
* bypass_battery
* camera
* capacitor_large
* computer
* contactor
* current
* current_circled
* current_circled_outline
* device
* ephesus_fixture
* ephesus_gateway
* fan
* flow
* forklift
* generator
* generator_off
* grade_a
* grade_b
* grade_c
* grade_d
* grade_f
* health
* leaf
* maintenance
* moisture
* overlap
* network_switch
* pdu
* pickup_truck
* priority
* pump
* power_circled
* power_circled_outline
* push_notification
* push_notification_solid
* qrcode
* running_high
* running_low
* scan_qrcode
* server
* servers
* ssol
* stopped
* stopping
* switch
* trending_down
* trending_flat
* trending_up
* utility
* vfd
* vmms
* voltage
* voltage_circled
* voltage_circled_outline
* water
* water_outline
* waveform
* xstorage
* xstorage_alt





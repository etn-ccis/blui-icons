# PX Blue SVG Icons
This is a library of SVG Icons for use in PX Blue applications.

## Installation
To install the PX Blue SVG Icons from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/icons-svg
or
yarn add @pxblue/icons-svg
```

## Usage

### Angular
For Angular, you can add individual svg files to your code:
```
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
declare var require: any;
const icon = require("@pxblue/icons-svg/Breaker.svg");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
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
Add a mat-icon tag in your html file:
```
<mat-icon svgIcon="breaker"/>
```

#### or as a collection:

```
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
declare var require: any;
const icons = require("@pxblue/icons-svg/icons.svg");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace('px-icons', this.domSanitizer.bypassSecurityTrustResourceUrl(icons));
  }
}
```

Add a mat-icon tag in your html file:
```
<mat-icon svgIcon="px-icons:Bearing"></mat-icon>
```

### React
```
const icon = require('@pxblue/icons-svg/ICON_NAME.svg');
...
<img src={icon}/>
```

>NOTE: If you will be using many of these icons in your application, we recommend you use [@pxblue/svg-mat-icon](https://www.npmjs.com/package/@pxblue/svg-mat-icon) for Angular projects or [@pxblue/icons-mui](https://www.npmjs.com/package/@pxblue/icons-mui) for React projects (or our [icon font](https://www.npmjs.com/package/@pxblue/icons)) to simplify usage. This library makes more sense if you just need one or two icons or if you want to reduce the size of your bundle.

### Available SVG Icons
Currently, we have SVG Icons available for:
* air_filter
* bearing
* breaker
* bypass_battery
* camera
* capacitor
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
* tripped
* utility
* vgd
* vmms
* voltage
* voltage_circled
* voltage_circled_outline
* water
* water_outline
* waveform
* xstorage
* xstorage_alt





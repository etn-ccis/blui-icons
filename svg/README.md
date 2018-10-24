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
For Angular, you'll need to declare require in tS file (typically component.ts).
```
declare var require: any;
const icon = require('@pxblue/icons-svg/ICON_NAME.svg');
...
export class MyClass{
    myImg = icon;
}
```
Add an image tag in component.html file and bind your icon to it:
```
<img src="{{myImg}}" alt="my image"/>
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
* Bearing
* Breaker
* Capacitor
* Device
* EphesusFixture
* EphesusGateway
* Fan
* Flow
* Health
* Priority
* Pump
* QRCode
* RunningHigh
* RunningLow
* SSOL
* Stopped
* Stopping
* Utility
* VFD
* XStorage
* XStorageAlt




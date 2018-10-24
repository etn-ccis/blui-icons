# PX Blue Supplemental Icons
This is a library of supplemental icons, to be used in conjunction with the standard Material Design icons in PX Blue applications.

## Installation
To install the PX Blue icon font from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/icons
or
yarn add @pxblue/icons
```
You then need to reference the font in your application so that it is available for use.

#### Angular
In order to use the icon font, you will need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the icon font reference:
```
"styles": [
    "src/styles.scss",
    "./node_modules/typeface-open-sans",
    "./node_modules/@pxblue/icons/iconfont/icons.css"
],
```

#### React
For React, you'll need to require the font in your top-level JS file (typically index.js).
```
require('@pxblue/icons/iconfont/icons.css');
```

### Using the icon font in your application
This will make the PX Blue icons available to your code by using the appropriate class name on a ```<i>``` element, e.g.:
  
```
<i class="pxb-ICONNAME"></i>
```

>**NOTE:** these icons/class names will be renamed in a future update to be more user friendly. You will need to update your references when that change occurs, or stay on the older version.

### Available Icons
Currently, we have icons available for:
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

# Future Improvements
In the future, we plan to make these icons available not only as an icon font, but also as an iconography module (for Angular) and as SVG components (for React) to better align with how Angular Material and Material-UI have implemented icons. Stay tuned for future updates.

# For Icon Creators
Each icon has its own folder in the /icons/design folder, which includes the clean SVG file and the source design file(s).

Each icon folder will be nested into a "family" folder. Family folders follow a pattern similar to MD. Our initial families are **Status** and **Devices**.


# PX Blue Spplemental Icons
This is a library of supplemental icons, to be used in conjunction with the standard Material Design icons in PX Blue applications.

## Installation
To use these icons, you will need to clone this repository:
```
git clone http://github.com/pxblue/icons
```

## Using the icons in your application
At this time, you will need to manually add the icon font to your application by copying (or dragging and dropping) the files from icons/iconfont/ into you project structure as a resource.

You can then include the icons/iconfont/icons.css file in your top-level css or scss file:
```
@import 'path/to/icons.css';
```
This will make the PX Blue icons available to your code by using the appropriate class name on a ```<i>``` element, e.g.:
  
```
<i class="icon-ICONNAME_24px"></i>
```

### Available Icons
Currently, we have icons available for:
* px_bearing
* px_breaker
* px_capacitor
* px_device
* px_ephesus_fixture
* px_ephesus_gateway
* px_fan
* px_pump
* px_ssol
* px_utility
* px_vfd
* px_xstorage
* px_xstorage_alt
* px_flow
* px_health
* px_priority
* px_qrcode
* px_running_high
* px_running_low
* px_stop
* px_stopping

# For Icon Creators
===========================
Each icon has its own folder in the /icons/design folder, which includes the clean SVG file and the source design file(s).

Each icon folder will be nested into a "family" folder. Family folders follow a pattern similar to MD. Our initial families are **Status** and **Devices**.


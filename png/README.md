# PX Blue PNG Icons

PNG icons can be created from SVG icon files using [convert-svg-to-png](https://www.npmjs.com/package/convert-svg-to-png) cli.

## Installation

```
yarn global add convert-svg-to-png
```
## cli quick steps
To create PNG icons from existing SVG icons in the same directory at a height and width of 24dp.

- Open terminal and change directories to the location of SVG files.
- Run ```convert-svg-to-png *.svg --height 24 --width 24 --scale 1```
- The original SVG icon files will not be changed and new files with the same name will be created in PNG format. 

To convert one specific SVG icon to a PNG icon.
- Run ```convert-svg-to-png <file-name>.svg --height 24 --width 24 --scale 1```

To change the default vector-based XML SVG icon colors.
- Update the path to include ```<path fill="your-hex-color"```
- Find and replace in your IDE works for this or can be a script.
- Caution that some SVG's have multiple paths and can require addtional fill colors.



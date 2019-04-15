# PX Blue Progress Icons

[![](https://img.shields.io/npm/v/@pxblue/react-progress-icons.svg?label=@pxblue/react-progress-icons&style=flat)](https://www.npmjs.com/package/@pxblue/react-progress-icons)
[![](https://img.shields.io/circleci/project/github/pxblue/icons/master.svg?style=flat)](https://circleci.com/gh/pxblue/icons/tree/master)

This is a library of icons with dynamic fill capabilities that can be used to show progress (similar to a traditional progress spinner or bar). These can be used to show health, battery life, etc.

Currently, we have icons available for:
* battery
* heart
* pie

## Installation
To install the PX Blue progress icons from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/react-progress-icons
```


## Using the progress icons in your application
The progress icon components can be imported and used like you would use any other component. You can manually set the desired color for the icon, otherwise it will inherit the text color of its parent container;

```
import {Battery, Heart, Pie} from '@pxblue/react-progress-icons';
...
<Battery percent={100} size={36} color={'green'} charging={false}/>
<Heart percent={50} size={18} color={'pink'}/>
<Pie percent={50} size={48} color={'blue'} ring={40}/>
```

### Available properties
* ```percent``` (Number): the amount to fill the icon. **Default**: 100.
* ```size``` (Number): the size of the icon (px). **Default**: 24.
* ```charging``` (Boolean, *Battery only*): whether to show the charging indicator or not. **Default**:false.
* ```color``` (String): the color to use for the icon. **Default**: inherit. Color can also be set through the ```style``` property.
* ```ring``` (Number, *Pie only*): the thickness of the outer ring (1 (thin ring) - 10 (full circle)). **Default**: 10.

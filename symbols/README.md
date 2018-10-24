# PX Blue Symbols
This is a library of one-line symbols for use in PX Blue applications.

## Installation
To install the PX Blue symbols from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/symbols
or
yarn add @pxblue/symbols
```

## Usage
### Angular
For Angular, you'll need to declare require in tS file (typically component.ts).
```
declare var require: any;
const symbol = require('@pxblue/symbols/SYMBOL_NAME.svg');
...
export class MyClass{
    myImg = symbol;
}
```
Add an image tag in component.html file and bind your symbol to it:
```
<img src="{{myImg}}" alt="my image"/>
```

### React
```
const symbol = require('@pxblue/symbols/SYMBOL_NAME.svg');
...
<img src={symbol}/>
```

### Available Symbols
Currently, we have symbols available for:
* accessory
* add
* alert
* ammeter
* arms
* ats
* battery-caution
* battery-empty
* battery-full
* battery-symbol
* battery
* bi-metallic-ol
* breaker-face
* breaker-handle
* buttons
* capacitor-with-bus
* capacitor
* carbon-monoxide-node
* carbon-monoxide-base
* chiller-pump
* circle
* compartment-light
* compartment
* contactor
* conveyor
* current-transformer-with-bus
* current-transformer
* datacenter
* default
* disconnected-breaker
* drawout-fuse
* drawout
* drive
* edr
* fan
* feeder
* fuse
* fusible-switch
* generator
* ground
* hcu
* hrg-base
* hrg-node
* hvac
* hydro
* io
* leaf
* led
* light-bulb
* low-voltage-breaker
* low-voltage-drawout-breaker
* magnetic-ol
* mcc
* medium-voltage-breaker
* medium-voltage-drawout-breaker
* mater-face
* meter
* motar
* motor-starter
* nuclear
* oneline
* other
* outlet
* panel-door
* pdu
* placeholder-rectangle
* placeholder-square
* potential-transformer
* ppe
* provisional-breaker
* pump
* pxg
* rectangle
* relay-face
* relay
* remote-racking-rect
* remote-racking
* remote
* remove
* running-reversed
* running
* sensor
* skull
* soft-starter
* solar
* source
* spd
* ssol
* stop
* sun
* switch
* switchgear-dashboard-light
* switchgear-dashboard
* switchgear-light
* switchgear
* toggle
* touchscreen-large
* touchscreen-small
* tower
* transformer
* trip-unit-face
* trip-unit
* ups
* vfd
* water-pump
* wind


# For Icon Creators
Each symbol has its own folder in the /icons/symbols folder, which includes the clean SVG file .



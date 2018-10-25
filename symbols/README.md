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
* battery
* battery_caution
* battery_empty
* battery_full
* battery_symbol
* bi_metallic_ol
* breaker_face
* breaker_fandle
* buttons
* capacitor
* capacitor_with_bus
* carbon_monoxide_base
* carbon_monoxide_node
* chiller_base
* circle
* compartment
* compartment_light
* contactor
* conveyor
* current_transformer
* current_transformer_with_bus
* data_center
* default
* disconnected_breaker
* drawout
* drawout_fuse
* drive
* edr
* fan
* feeder
* fuse
* fusible_switch
* generator
* ground
* hcu
* hrg_base
* hrg_node
* hvac
* hydro
* iO
* leaf
* led
* light_bulb
* low_voltage_breaker
* low_voltage_drawout_breaker
* magnetic_ol
* mcc
* medium_voltage_breaker
* medium_voltage_drawout_breaker
* meter
* meter_face
* motor
* motor_starter
* nuclear
* oneline
* other
* outlet
* panel_door
* pdu
* placeholder_rectangle
* placeholder_square
* potential_transformer
* ppe
* provisional_breaker
* pump
* pxg
* rectangle
* relay
* relay_face
* remote
* remote_racking
* remote_racking_rect
* remove
* running
* running_reversed
* sensor
* skull
* soft_starter
* solar
* source
* spd
* ssol
* stopped
* sun
* switch
* switchgear
* switchgear_dashboard
* switchgear_dashboard_light
* switchgear_light
* toggle
* touchscreen_large
* touchscreen_small
* tower
* transformer
* trip_unit
* trip_unit_face
* ups
* vfd
* water_pump
* wind


# For Icon Creators
Each symbol has its own folder in the /icons/symbols folder, which includes the clean SVG file .



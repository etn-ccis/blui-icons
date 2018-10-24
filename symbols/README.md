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
* Accessory
* Add
* Alert
* Ammeter
* ARMS
* ATS
* Battery
* BatteryCaution
* BatteryEmpty
* BatteryFull
* BatterySymbol
* BiMetallicOL
* BreakerFace
* BreakerHandle
* Buttons
* Capacitor
* CapacitorWithBus
* CarbonMonoxideBase
* CarbonMonoxideNode
* ChillerBase
* Circle
* Compartment
* CompartmentLight
* Contactor
* Conveyor
* CurrentTransformer
* CurrentTransformerWithBus
* DataCenter
* Default
* DisconnectedBreaker
* Drawout
* DrawoutFuse
* Drive
* EDR
* Fan
* Feeder
* Fuse
* FusibleSwitch
* Generator
* Ground
* HCU
* HRGBase
* HRGNode
* HVAC
* Hydro
* IO
* Leaf
* LED
* LightBulb
* LowVoltageBreaker
* LowVoltageDrawoutBreaker
* MagneticOL
* MCC
* MediumVoltageBreaker
* MediumVoltageDrawoutBreaker
* Meter
* MeterFace
* Motor
* MotorStarter
* Nuclear
* Oneline
* Other
* Outlet
* PanelDoor
* PDU
* PlaceholderRectangle
* PlaceholderSquare
* PotentialTransformer
* PPE
* ProvisionalBreaker
* Pump
* PXG
* Rectangle
* Relay
* RelayFace
* Remote
* RemoteRacking
* RemoteRackingRect
* Remove
* Running
* RunningReversed
* Sensor
* Skull
* SoftStarter
* Solar
* Source
* SPD
* SSOL
* Stopped
* Sun
* Switch
* Switchgear
* SwitchgearDashboard
* SwitchgearDashboardLight
* SwitchgearLight
* Toggle
* TouchscreenLarge
* TouchscreenSmall
* Tower
* Transformer
* TripUnit
* TripUnitFace
* UPS
* VFD
* WaterPump
* Wind


# For Icon Creators
Each symbol has its own folder in the /icons/symbols folder, which includes the clean SVG file .



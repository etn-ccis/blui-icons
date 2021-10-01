# Changelog

## v2.7.0 (October 1, 2021)

### Added

-   New icons: EV Plug Type 1, EV Plug Type 2, EV Plug CCS Combo, EV Plug CHAdeMO, RFID

## v2.6.0 (August 25, 2021)

### Added

-   New icons: Output Flow, Input Flow, Smoke Detector, File PDF, File DOC, Load Factor.

### Changed

-   Modified the style of Air Filter, Power Factor.

## v2.5.0 (August 17, 2021)

### Added:

-   Device- and channel-related icons: ATS, ATS Alt, Distribution Box, Distribution Box Outline, Drive, Meter Face, Motor Alt, Motor Controller Outline, Motor Controller, Motor Outline, Motor Starter, Motor, Relay, Sensor Alt, Sensor Device Alt, Sensor Device, Sensor, Device Info, Trip Curve Alt, Trip Curve, Trip Unit, UPS Outline, UPS, Configuration, Device Configuration, Control, Diagnostic Alt, Diagnostic, Apparent Energy, Apparent Power, Bypass Alt, Bypass, Flood, Frequency, Harmonics, Phase Angle, Power Factor, Reactive Energy, Reactive Power, Real Energy, Real Power, Sequence, Air Conditioner, Fan Circled.

## v2.4.1 (July 19, 2021)

### Fixed

-   Crooked icon paths in current_ac, current_dc, grade_a, line_to_neutral, power_dc, power_ac, power_apparent_ac, voltage_ac, voltage_dc.

## v2.4.0 (June 25, 2021)

### Added

-   Device icons: Battery Large, Battery Large Outline, Battery Large Reset, Battery Large Reset Outline and Battery Large Showing Terminals
-   General icons: Technician

## v2.3.0 (March 25, 2021)

### Added

-   Brand logos: Amazon, Amazon Alexa, Apple, and Google.
-   Industrial icons: Pressure and Pressure Alt.
-   System icon: Face ID.

## v2.2.2 (January 11, 2021)

### Fixed

-   Crooked vector path in departments icon.
-   Aspect ratio in the Eaton logos.

## v2.2.1 (September 30, 2020)

### Fixed

-   Missing icon in the index file.

## v2.2.0 (September 30, 2020)

### Added

-   Three Eaton logo variants.
-   Lighting icons for Dimmer, Light Switch, Outlet, Light Bulb, and Ceiling Light.
-   General icons for Account Settings, Lock Reset, and Internet, Glass Divider.
-   Electrical icons for Capacitor Symbol, Diode, Switchgear, Transformer, Current AC, Current DC, Power AC, Power DC, Power Apparent AC, Voltage AC, Voltage DC, AC, DC, Line to Line, and Line to Neutral.
-   PPE icons for Hearing Protection, Safety Boot, Safety Glasses, and Distance Apart.
-   Device icons for AMI Gateway, IPPE Vibrate, IPPE Vibrate Off, IPPE Vibrate Outlined, and Device Activating.

### Changed

-   Modified the icon builder to generate icons with a customized view box.

## v2.1.1 (July 2, 2020)

### Changed

-   Renamed RoadVariant to RoadAlt for consistency.

### Fixed

-   Various alignment and color issues.

## v2.1.0 (February 13, 2020)

### Added

-   Type definitions for use in TypeScript projects.

## v2.0.2 (September 27, 2019)

### Added

-   New icons for Department, Departments, Building, Factory, Map Markers, Piggy Bank.

### v2.0.1 (July 25, 2019)

## Changed

-   This version has updated the import path for default imports of individual icons (named imports are unaffected). Individual icons can now be imported from the package root instead of from the /icons subdirectory:

```tsx
// new import syntax
import IconName from '@pxblue/icons-mui/IconName';
```

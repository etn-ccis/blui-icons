# Changelog

## v1.2.1 (October 27, 2020)

### Changed

- Moved `color` from peerDependencies to dependencies.

## v1.2.0 (September 30, 2020)

### Added

- UPS progress icon (`<ups-progress>`).
- Option to show label percentages, with the following attributes: `showPercentLabel`, `labelColor`, `labelPosition` and `labelSize`.
- Optional `backgroundColor` attribute to display a background in the unfilled area.

## v1.1.3 (May 22, 2019)

### Added

- Outlined progress icons and a charging bolt for Battery progress icon.

## v1.1.0 (December 13, 2018)

### Changed

- This version of the library has collapsed the multiple icon libraries into a single library to simplify imports.

Breaking changes:

- Progress Icons are no longer imported individually in your app.module.ts file
- The new usage imports a single progress icon module

Instead import {NgProgressIconsModule} from '@pxblue/ng-progress-icons' and place that module in your imports array

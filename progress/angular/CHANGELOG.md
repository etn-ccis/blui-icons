# Changelog

## v1.1.5

-   Added UPS progress icon (`<ups-progress>`)

## v1.1.3

This version of the library has outlined progress icons and a charging bolt for Battery progress icon.

## v1.1.0

This version of the library has collapsed the multiple icon libraries into a single library to simplify imports.

Breaking changes:

-   Progress Icons are no longer imported individually in your app.module.ts file
-   The new usage imports a single progress icon module

Instead import {NgProgressIconsModule} from '@pxblue/ng-progress-icons' and place that module in your imports array

# PX Blue Progress Icons

[![](https://img.shields.io/npm/v/@pxblue/ng-progress-icons.svg?label=@pxblue/ng-progress-icons&style=flat)](https://www.npmjs.com/package/@pxblue/ng-progress-icons)
[![](https://img.shields.io/circleci/project/github/pxblue/icons/master.svg?style=flat)](https://circleci.com/gh/pxblue/icons/tree/master)

<img width="100%" style="max-width: 600px" alt="Progress icons" src="https://raw.githubusercontent.com/pxblue/icons/master/progress/assets/progress-icons.png" />

This is a library of icons with dynamic fill capabilities that can be used to show progress (similar to a traditional progress spinner or bar). These can be used to show health, battery life, etc.

Currently, we have icons available for:

-   battery
-   heart
-   pie
-   ups

## Installation

To install the PX Blue progress icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
yarn add @pxblue/ng-progress-icons // for Angular components
```

## Using the progress icons in your application

The progress icon components can be imported and used like you would use any other component. You can manually set the desired color for the icon, otherwise it will inherit the text color of its parent container;

```ts
// app.module.ts
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';

...
imports: [
    NgProgressIconsModule
],
```

```html
<!-- app.component.html -->
<battery-progress percent="80" size="36" color="green" [charging]="true" [outlined]="true"></battery-progress>
<heart-progress percent="99" size="36" color="pink" [outlined]="true"></heart-progress>
<pie-progress percent="30" size="36" color="#0000ff" ring="4" [outlined]="true"></pie-progress>
<ups-progress percent="10" size="36" color="#0000ff" [outlined]="true"></ups-progress>
```

## API

### Shared Attributes

These props are available on all of the progress icons in this package.

<div style="overflow: auto;">

| Prop Name        | Description                         | Type                                  | Required | Default        |
| ---------------- | ----------------------------------- | ------------------------------------- | -------- | -------------- |
| percent          | The amount to fill the icon (0-100) | `number`                              | no       | 100            |
| size             | The size of the icon (in px)        | `number`                              | no       | 24             |
| outlined         | Whether to use the outlined style   | `boolean`                             | no       | false          |
| color            | The color used for the icon fill    | `string`                              | no       | 'currentColor' |
| showPercentLabel | Option to show percentage overlay   | `boolean`                             | no       | false          |
| labelColor       | Label text color                    | `string`                              | no       |                |
| labelPosition    | Where to display the text label     | `top, bottom, center, right, left`    | no       | `center`       |
| labelSize        | Size of the label in px             | `number`                              | no       | `size/4`       |

</div>

Any other props supplied will be provided to the root element (`svg`).

### Battery Attributes

The battery supports all of the shared attributes above and the following additional attribute:

| Prop Name | Description                            | Type      | Required | Default |
| --------- | -------------------------------------- | --------- | -------- | ------- |
| charging  | Whether to show the charging indicator | `boolean` | no       | false   |

### Pie Attributes

The pie supports all of the shared attributes above and the following additional attribute:

| Prop Name | Description                                                        | Type     | Required | Default |
| --------- | ------------------------------------------------------------------ | -------- | -------- | ------- |
| ring      | The thickness of the outer ring (1 = thin ring, 10 = full circle ) | `number` | no       | 10      |

## Building & Packaging

These progress icons are currently created manually by modifying the svg files from the design folder with various clip paths and fill algorithms. They are then packaged up for distribution via npm.

The Angular icons are built using the library packages built into the Angular CLI ([read more](https://github.com/angular/angular-cli/wiki/stories-create-library)).

To create a new component:

```sh
cd icons/progress/angular
ng generate component component-name --project=ng-progress-icons
```

And then to create the /dist version:

```sh
ng build ng-progress-icons
or
yarn build
```

Once you have built the library, you can publish to npm via:

```sh
cd dist/ng-progress-icons
npm version patch
npm publish
```

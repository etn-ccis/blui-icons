# React Native Vector Icons

[![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-vector-icons.svg?label=@brightlayer-ui/react-native-vectoricons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-vector-icons)

This package allows you to use Brightlayer UI supplemental icons in the same way as you use [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) for Material Icons.

## Installation

To install the Brightlayer UI react native vector icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
npm install --save @brightlayer-ui/react-native-vector-icons
or
yarn add @brightlayer-ui/react-native-vector-icons
```

This package relies on [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) as a peer dependency:

```
npm install --save react-native-vector-icons
or
yarn add react-native-vector-icons
```

> Carefully follow the [integration instructions](https://github.com/oblador/react-native-vector-icons#installation) in their documentation for making the icons available in your project.

#### iOS

To use this package in iOS projects, the native modules will need to be linked (this will be very familiar after you have linked the native modules for RNVI). We recommend doing this via CocoaPods:

Add the following to your `Podfile`:

```
pod 'RNBLUIVectorIcons', :path => '../node_modules/@brightlayer-ui/react-native-vector-icons'
```

Edit your `Info.plist`

-   Under the "Fonts Provided By Application" property (which you should have added when setting up RNVI), add an entry for BrightlayerUIIcons.ttf.

After updating these files you will need to install the Pods and recompile your application:

```sh
cd ios
pod install
```

#### Android

To use this package in Android projects, you need to make the icon font available in your application (this will be very familiar after you have linked the fonts for RNVI). We recommend doing this via Gradle:

Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```
apply from: "../../node_modules/@brightlayer-ui/react-native-vector-icons/fonts.gradle"
```

> NOTE: if you are restricting which fonts are being added to your application for `react-native-vector-icons`, you will need to include 'BrightlayerUIIcons.ttf' in your `iconFontNames` array in this file as well.

## Usage

Using these icons in your application is exactly the same as using react-native-vector-icons (we use their library to build ours so the API is identical).

```tsx
import BLUIIcon from '@brightlayer-ui/react-native-vector-icons';
...
<BLUIIcon name={'broccoli'} color={'green'} size={24}/>
```

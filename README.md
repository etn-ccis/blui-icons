# Brightlayer UI Icons

[![](https://img.shields.io/npm/v/@brightlayer-ui/icons.svg?label=@brightlayer-ui/icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons)
[![](https://img.shields.io/npm/v/@brightlayer-ui/icons-svg.svg?label=@brightlayer-ui/icons-svg&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/icons-mui?label=%40brightlayer-ui/icons-mui)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-vector-icons.svg?label=@brightlayer-ui/react-native-vectoricons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-vector-icons)

This is a library of supplemental icons, to be used in conjunction with the standard Material Design icons in Brightlayer UI applications.

These icons are available in various formats to suit your needs:

-   Icon Font ([npm](https://www.npmjs.com/package/@brightlayer-ui/icons), [src](https://github.com/etn-ccis/blui-icons/tree/master/packages/icon-font))
-   SVG Icons ([npm](https://www.npmjs.com/package/@brightlayer-ui/icons-svg), [src](https://github.com/etn-ccis/blui-icons/tree/master/packages/svg))
-   React Components ([npm](https://www.npmjs.com/package/@brightlayer-ui/icons-mui), [src](https://github.com/etn-ccis/blui-icons/tree/master/packages/mui))
-   React Native Vector Icons ([npm](https://www.npmjs.com/package/@brightlayer-ui/react-native-vector-icons),[src](https://github.com/etn-ccis/blui-icons/tree/master/packages/rn-vector))
-   PNG Files ([src](https://github.com/etn-ccis/blui-icons/tree/master/packages/png))

Our library of dynamic progress icons has been split off into a dedicated repository:

-   [Progress Icons](https://github.com/etn-ccis/blui-progress-icons/tree/master)

### Available Icons

See the [Iconography](https://brightlayer-ui.github.io/style/icon-library) on brightlayer-ui.github.io for a list of currently available icons.

### Slashed Icons

The repository supports two slashed-icon approaches:

-   Pre-built slashed SVG files in [@brightlayer-ui/icons-svg](https://www.npmjs.com/package/@brightlayer-ui/icons-svg), using filenames like `*_slashed.svg`.
-   Runtime slashed rendering in [@brightlayer-ui/icons-mui](https://www.npmjs.com/package/@brightlayer-ui/icons-mui) via `SlashedSvgIcon`.

Runtime usage example:

```tsx
import AC from '@brightlayer-ui/icons-svg/ac.svg';
import { SlashedSvgIcon } from '@brightlayer-ui/icons-mui';

<SlashedSvgIcon iconSrc={AC} size={48} slashColor="#727E84" alt="ac slashed" />;
```

# For Icon Creators

Please read the instructions in the [Design](https://github.com/etn-ccis/blui-icons/blob/master/design/README.md) folder before creating or submitting new icons.

# For Maintainers / Contributors

This repository uses yarn workspaces with the latest version of yarn. To get started working with the libraries:

```sh
git clone https://github.com/etn-ccis/blui-icons.git
cd blui-icons
yarn install
```

After you have made changes, you may build the packages:

```sh
yarn build
```

If you add or update slashed SVG variants, run the slashed generation and metadata sync steps before building:

```sh
cd packages/svg
yarn generate:all-slashed
yarn copy:index

cd ../mui
yarn copy:meta
```

Note: slashed SVG file generation and metadata registration are separate steps.

There is a demo project in the repository which shows the various icon formats being used in a project. To start the demo, ensure that the demo project is using the latest version of packages you created before spinning up the development server:

```sh
yarn update:demo
yarn start
```

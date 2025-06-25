# Migration from v2 to v3

Going forward in v3 for monorepo setups on Android, it will no longer be necessary to manually set the fonts path.

```diff

 project.ext.vectoricons = [
  iconFontsDir: "../../../../node_modules/react-native-vector-icons/Fonts",
  iconFontNames: ["YourFont.ttf", "..."]
- bluiIconFontsDir: "../../../../node_modules/@brightlayer-ui/react-native-vector-icons/Fonts",
 ]

```
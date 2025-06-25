# Migration from v2 to v3

Going forward in v3 for monorepo setup for android environment we would no longer be require to manually set the fonts path.

```diff

 project.ext.vectoricons = [
  iconFontsDir: "../../../../node_modules/react-native-vector-icons/Fonts",
  iconFontNames: ["YourFont.ttf", "..."]
- bluiIconFontsDir: "../../../../node_modules/@brightlayer-ui/react-native-vector-icons/Fonts",
 ]

```
# Skill: Build Icon Packages

## Purpose

Build all icon packages after adding new icons and updating metadata.

## Trigger Phrases

- "Build icons"
- "Build packages"
- "Run icon build"
- "Generate icon packages"

---

## ⚠️ CRITICAL: Build Time Warning

> **The full build takes 5-10 minutes** because the SVG package clones the Material Design icons repository.
>
> **DO NOT proceed to the next steps (testing, updating versions/changelogs) until the build completes successfully.**
>
> If you update versions before the build finishes, your new icon components will NOT be generated.

---

## Full Build

Run from repository root and **wait for completion**:

```bash
yarn build
```

This builds all packages in **topological order**:

```
design/ → packages/svg → packages/icon-font → packages/rn-vector
                      ↘ packages/mui
```

### Expected Build Output

When the build completes successfully, you should see output similar to:

```
➤ YN0000: [@brightlayer-ui/icons-svg]: Process exited (exit code 0)
➤ YN0000: [@brightlayer-ui/icons]: Process exited (exit code 0)
➤ YN0000: [@brightlayer-ui/icons-mui]: Process exited (exit code 0)
➤ YN0000: [@brightlayer-ui/react-native-vector-icons]: Process exited (exit code 0)
```

**All packages must show `exit code 0` before proceeding.**

---

## Individual Package Builds

For faster iteration during development:

```bash
# SVG package (must be built first)
cd packages/svg
yarn build

# Icon font (depends on svg)
cd packages/icon-font
yarn build

# MUI components (depends on svg)
cd packages/mui
yarn build

# React Native (depends on icon-font)
cd packages/rn-vector
yarn build
```

---

## Build Output

| Package     | Location                 | Generated Files                                  |
| ----------- | ------------------------ | ------------------------------------------------ |
| `svg`       | `packages/svg/`          | `index.json`, `*.svg`, `sprites/*`               |
| `icon-font` | `packages/icon-font/`    | `BrightlayerUIIcons.ttf`, `.json`, `.css`, `.ts` |
| `mui`       | `packages/mui/tsx/`      | Individual `.tsx` React components               |
| `rn-vector` | `packages/rn-vector/`    | `Fonts/`, `GlyphMaps/`                           |

---

## Build Process Details

### SVG Package (`packages/svg`)

1. Clears existing SVG files
2. Copies SVGs from `/design` (excluding `WIP/`, `Internal/`, `old/`)
3. Copies `META.json` → `index.json`
4. Generates SVG sprite files by family

### Icon Font Package (`packages/icon-font`)

1. Copies SVGs from `packages/svg`
2. Generates `BrightlayerUIIcons.ttf` font
3. Generates glyph maps (`.json`, `.ts`)
4. Generates CSS file

### MUI Package (`packages/mui`)

1. Imports SVGs from `@brightlayer-ui/icons-svg`
2. Generates individual React `.tsx` components
3. Generates `index.js` and `index.d.ts` exports

### React Native Package (`packages/rn-vector`)

1. Copies font from `packages/icon-font`
2. Copies glyph maps
3. Generates TypeScript definitions

---

## Verification (REQUIRED Before Next Steps)

**You MUST verify the build completed successfully before updating versions or changelogs.**

### 1. Check Build Exit Codes

All packages must show `exit code 0` in the terminal output.

### 2. Verify Your New Icon Exists

```bash
# Check SVG was copied
ls packages/svg/ | grep -i "your_icon_name"

# Check MUI component was generated (CRITICAL)
ls packages/mui/tsx/ | grep -i "YourIconName"

# Check icon font glyph map
grep -i "your_icon_name" packages/icon-font/BrightlayerUIIcons.json
```

### 3. Quick Verification Commands

```bash
# Check SVG sprites generated
ls packages/svg/sprites/

# Check icon font generated
ls packages/icon-font/BrightlayerUIIcons.*

# Check React Native files
ls packages/rn-vector/Fonts/
ls packages/rn-vector/GlyphMaps/
```

### ❌ If MUI Component is Missing

If your new icon's `.tsx` file is NOT in `packages/mui/tsx/`:

1. The build may not have completed - wait for it to finish
2. Run `yarn build` again from the repository root
3. Check that `META.json` filename matches the SVG exactly

---

## Troubleshooting

| Issue                    | Solution                                           |
| ------------------------ | -------------------------------------------------- |
| Build fails              | Check `META.json` syntax is valid                  |
| Icon not in output       | Verify filename in `META.json` matches SVG exactly |
| Missing from icon-font   | Ensure `packages/svg` was built first              |
| Missing MUI component    | Check for valid component name generation          |

---

## Next Step

After building, test and verify the icons.

See: [test-icons.md](test-icons.md)

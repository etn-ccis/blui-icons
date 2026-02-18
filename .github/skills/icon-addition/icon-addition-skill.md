# Icon Addition Skill

## Overview

This skill enables adding new icons to the BLUI Icons repository. The process involves adding SVG files to the design folder, updating metadata, building packages, and updating changelogs/versions.

## Trigger Phrases

- "Add a new icon"
- "Add icons to the repository"
- "Create new icon entry"
- "Update icon metadata"
- "Build icons"
- "Update icon package versions"

---

## Step 1: Adding Icons to the Design Folder

### Folder Structure

SVG files must be placed in the appropriate subfolder within `/design`:

```
design/
├── META.json                 # Main metadata file (REQUIRED to update)
├── META_INPROGRESS.json      # Work-in-progress tracking
├── README.md                 # Icon guidelines
│
├── Agriculture/              # Agriculture-related icons
├── Companies/                # Company logos
├── Devices/                  # Device/hardware icons
├── General/                  # General purpose icons
├── Industrial/               # Industrial icons
├── Lighting/                 # Lighting icons
├── Maps/                     # Map-related icons
├── Platforms/                # Platform-specific icons
├── PPE/                      # Personal protective equipment
├── Products/                 # Product-specific icons
├── Residential/              # Residential icons
├── Sports/                   # Sports icons
├── Status/                   # Status indicators
├── System/                   # System-related icons
│   ├── iOS/                  # iOS-specific icons
│   ├── Lock/                 # Lock/security icons
│   └── Size/                 # Size indicator icons
├── Toggle/                   # Toggle state icons
├── Tools/                    # Tool icons
├── Vehicles/                 # Vehicle icons
├── Weather/                  # Weather icons
│
├── WIP/                      # ⚠️ EXCLUDED from build
├── Internal/                 # ⚠️ EXCLUDED from build
└── old/                      # ⚠️ EXCLUDED from build
```

### Actions

1. **Identify the correct category folder** for the icon(s)

2. **Create a new subfolder** if needed:
   ```bash
   mkdir -p design/{Category}/{Subcategory}
   ```

3. **Copy SVG file(s)** to the appropriate location

4. **Add PNG files** to the PNG package:
   ```bash
   # Copy 24px PNG
   cp /path/to/your/new_icon_24.png packages/png/png24/new_icon.png

   # Copy 48px PNG
   cp /path/to/your/new_icon_48.png packages/png/png48/new_icon.png
   ```
   > **Note:** PNG filenames should match the SVG filename (without the size suffix).

### Constraints

- ❌ Do NOT place icons in `WIP/`, `Internal/`, or `old/` folders - these are excluded from build
- ✅ SVG files must be 24×24 pixels, optimized, with no strokes
- ✅ Filenames must be lowercase with underscores (e.g., `face_id.svg`, `lock_level_1_outline.svg`)
- ✅ PNG filenames must match SVG filenames

---

## Step 2: Updating the Metadata

### File Location

`/design/META.json`

### Schema

Each icon entry in the `icons` array must follow this structure:

```json
{
    "name": "Icon Display Name",
    "filename": "icon_filename.svg",
    "family": ["Category1", "Category2"],
    "style": "baseline",
    "tags": ["keyword1", "keyword2", "keyword3"],
    "description": "A brief description of what the icon represents",
    "author": "Author Name",
    "size": 24
}
```

### Field Requirements

| Field         | Type   | Required | Description                                           |
| ------------- | ------ | -------- | ----------------------------------------------------- |
| `name`        | string | ✅       | Human-readable display name (Title Case)              |
| `filename`    | string | ✅       | Exact SVG filename including `.svg` extension         |
| `family`      | array  | ✅       | Category tags for organization                        |
| `style`       | string | ✅       | `"baseline"`, `"outline"`, or `"twotone"`             |
| `tags`        | array  | ✅       | 5-10 search keywords for discoverability              |
| `description` | string | ✅       | Brief description (under 100 characters)              |
| `author`      | string | ✅       | Creator's name (default: `"Brightlayer UI"`)          |
| `size`        | number | ✅       | Icon size in pixels (default: `24`)                   |

### Example Entries

**Single icon:**
```json
{
    "name": "Face ID",
    "filename": "face_id.svg",
    "family": ["System", "iOS", "Security"],
    "style": "baseline",
    "tags": ["face", "recognition", "biometric", "authentication", "apple", "ios"],
    "description": "Apple Face ID biometric authentication icon",
    "author": "Brightlayer UI",
    "size": 24
}
```

**Icon with outline variant:**
```json
{
    "name": "Lock Level 1",
    "filename": "lock_level_1.svg",
    "family": ["System", "Lock", "Security"],
    "style": "baseline",
    "tags": ["lock", "security", "level", "access"],
    "description": "Security lock level 1 indicator",
    "author": "Brightlayer UI",
    "size": 24
},
{
    "name": "Lock Level 1 Outline",
    "filename": "lock_level_1_outline.svg",
    "family": ["System", "Lock", "Security"],
    "style": "outline",
    "tags": ["lock", "security", "level", "access", "outline"],
    "description": "Security lock level 1 indicator (outline style)",
    "author": "Brightlayer UI",
    "size": 24
}
```

### Best Practices

- **Tags:** Include 5-10 relevant keywords
- **Family:** Use existing categories when possible
- **Description:** Keep concise (under 100 characters)
- **Consistency:** Match naming patterns of existing icons

---

## Step 3: Building the Packages

### ⚠️ CRITICAL: Build Time Warning

> **The full build takes 5-10 minutes** because the SVG package clones the Material Design icons repository.
>
> **DO NOT proceed to Steps 4-6 until the build completes with `exit code 0` for ALL packages.**
>
> Updating versions before the build finishes will result in missing icon components.

### Full Build Command

```bash
# From repository root - WAIT FOR COMPLETION
yarn build
```

### Build Order (Topological)

```
design/ → packages/svg → packages/icon-font → packages/rn-vector
                      ↘ packages/mui
```

### Verify Build Completion

Before proceeding, verify your new icon was generated:

```bash
# Check MUI component exists (REQUIRED)
ls packages/mui/tsx/ | grep -i "YourIconName"

# Check SVG was copied
ls packages/svg/ | grep -i "your_icon_name"
```

**If the MUI component is missing, the build is not complete. Wait or re-run `yarn build`.**

### Individual Package Builds

```bash
# SVG package
cd packages/svg && yarn build

# Icon font
cd packages/icon-font && yarn build

# MUI components
cd packages/mui && yarn build

# React Native vector icons
cd packages/rn-vector && yarn build
```

### Build Output

| Package     | Output Location          | Generated Files                                  |
| ----------- | ------------------------ | ------------------------------------------------ |
| `svg`       | `packages/svg/`          | `index.json`, SVG files, sprite files            |
| `icon-font` | `packages/icon-font/`    | `BrightlayerUIIcons.ttf`, `.json`, `.css`, `.ts` |
| `mui`       | `packages/mui/tsx/`      | Individual `.tsx` React components               |
| `rn-vector` | `packages/rn-vector/`    | `Fonts/`, `GlyphMaps/`                           |

---

## Step 4: Testing Icons

### Visual Verification

1. **Run the demo project** to see all icons rendered
2. **Check SVG sprites:** `ls packages/svg/sprites/`
3. **Verify React components:** `ls packages/mui/tsx/ | grep -i "IconName"`

### Automated Tests

```bash
# Run all tests
yarn test

# Specific package tests
cd packages/mui && yarn test
```

### Manual Import Test

```tsx
// MUI icons
import { YourNewIcon } from '@brightlayer-ui/icons-mui';

// SVG
import YourNewIconSvg from '@brightlayer-ui/icons-svg/your_new_icon.svg';

// React Native
import { YourNewIcon } from '@brightlayer-ui/react-native-vector-icons';
```

---

## Step 5: Updating Changelogs and Versions

### Version Bump Rules

| Change Type      | Version Bump | Example             |
| ---------------- | ------------ | ------------------- |
| New icons added  | **Minor**    | `1.16.0` → `1.17.0` |
| Bug fixes only   | **Patch**    | `1.16.0` → `1.16.1` |
| Breaking changes | **Major**    | `1.16.0` → `2.0.0`  |

### Files to Update (All 4 Packages)

| Package                                     | `package.json`                    | `CHANGELOG.md`                     |
| ------------------------------------------- | --------------------------------- | ---------------------------------- |
| `@brightlayer-ui/icons-svg`                 | `packages/svg/package.json`       | `packages/svg/CHANGELOG.md`        |
| `@brightlayer-ui/icons`                     | `packages/icon-font/package.json` | `packages/icon-font/CHANGELOG.md`  |
| `@brightlayer-ui/icons-mui`                 | `packages/mui/package.json`       | `packages/mui/CHANGELOG.md`        |
| `@brightlayer-ui/react-native-vector-icons` | `packages/rn-vector/package.json` | `packages/rn-vector/CHANGELOG.md`  |

### Changelog Entry Format

```markdown
## vX.Y.0 (Month Year)

### Added

-   New icons: Icon Name 1, Icon Name 2, Icon Name 3.
```

---

## Step 6: Publishing

### Pre-Publish Checklist

- [ ] SVG files added to correct `/design` subfolder
- [ ] `META.json` updated with all new icon entries
- [ ] JSON syntax validated
- [ ] `yarn build` completes successfully
- [ ] Icons visible in demo project
- [ ] All `package.json` versions updated (minor bump)
- [ ] All `CHANGELOG.md` files updated
- [ ] Tests pass (`yarn test`)
- [ ] Changes committed to Git

### Publishing Steps

1. Create a Pull Request with your changes
2. After PR approval and merge, packages are published via CI/CD

---

## Quick Reference Checklist

```
□ 1. Prepare SVG files (24x24, optimized, no strokes)
□ 2. Add SVGs to /design/{Category}/ folder
□ 3. Update /design/META.json with icon entries
□ 4. Run `yarn build` from root
□ 5. Verify icons in demo project
□ 6. Update package.json versions (minor bump)
□ 7. Update CHANGELOG.md files
□ 8. Commit and create PR
□ 9. Publish after approval
```

---

## Troubleshooting

| Issue                          | Solution                                             |
| ------------------------------ | ---------------------------------------------------- |
| Icon not appearing after build | Check filename matches `META.json` exactly           |
| Build fails with JSON error    | Validate `META.json` syntax                          |
| Icon renders incorrectly       | Check SVG for strokes, gradients, or embedded images |
| Missing from specific package  | Verify build order (svg → icon-font → others)        |

---

## Related Files

- `/design/META.json` - Icon metadata
- `/design/README.md` - Icon creation guidelines
- `/ADDING_ICONS.md` - Full documentation
- `packages/*/CHANGELOG.md` - Package changelogs
- `packages/*/package.json` - Package versions

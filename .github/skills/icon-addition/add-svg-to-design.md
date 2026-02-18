# Skill: Add SVG Files to Design Folder

## Purpose

Add new SVG icon files to the correct location in the `/design` folder structure.

## Trigger Phrases

- "Add SVG to design folder"
- "Where do I put new icons"
- "Add icon files"

---

## Folder Structure

```
design/
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
├── WIP/                      # ⚠️ EXCLUDED - Work in progress
├── Internal/                 # ⚠️ EXCLUDED - Internal use only
└── old/                      # ⚠️ EXCLUDED - Deprecated icons
```

---

## SVG Requirements

| Requirement     | Value                                      |
| --------------- | ------------------------------------------ |
| **Format**      | SVG                                        |
| **Canvas Size** | 24×24 pixels                               |
| **Color**       | Single color (`#000000` or `currentColor`) |
| **Stroke**      | Converted to fills (no strokes)            |
| **Layers**      | Flattened                                  |

---

## Naming Convention

```
icon_name_variant.svg
```

- **Lowercase letters only**
- **Underscores** (`_`) to separate words
- **Variant suffixes:**
  - `_outline` - Outline version
  - `_twotone` - Two-tone version
  - `_alt` - Alternative design

**Examples:**
```
lock_level_1.svg
lock_level_1_outline.svg
battery_charging_50.svg
face_id.svg
size_xl.svg
```

---

## Steps

1. **Identify the category** - Choose the appropriate folder based on icon purpose

2. **Create subfolder if needed:**
   ```bash
   mkdir -p design/{Category}/{Subcategory}
   ```

3. **Copy SVG files:**
   ```bash
   cp /path/to/icon.svg design/{Category}/{Subcategory}/
   ```

4. **Verify placement:**
   ```bash
   ls -la design/{Category}/{Subcategory}/
   ```

---

## Adding PNG Files

In addition to SVG files, you should also add equivalent PNG files to the PNG package.

### PNG Folder Structure

```
packages/png/
├── png24/    # 24×24 pixel PNG files
└── png48/    # 48×48 pixel PNG files
```

### Steps

1. **Copy 24px PNG file:**
   ```bash
   cp /path/to/your/new_icon_24.png packages/png/png24/new_icon.png
   ```

2. **Copy 48px PNG file:**
   ```bash
   cp /path/to/your/new_icon_48.png packages/png/png48/new_icon.png
   ```

### PNG Naming Convention

- PNG filenames should **match the SVG filename** (without size suffix)
- Use lowercase with underscores
- Do not include size in filename

**Examples:**
| SVG Filename | PNG 24px | PNG 48px |
|--------------|----------|----------|
| `notification_unread.svg` | `notification_unread.png` | `notification_unread.png` |
| `lock_level_1.svg` | `lock_level_1.png` | `lock_level_1.png` |

---

## Constraints

- ❌ Do NOT place in `WIP/`, `Internal/`, or `old/` - excluded from build
- ✅ Filename must match entry in `META.json` exactly
- ✅ SVG must be optimized (no metadata, editor artifacts)
- ✅ PNG filenames must match SVG filenames (without `.svg` extension)

---

## Next Step

After adding SVG and PNG files, update metadata in `/design/META.json`.

See: [update-metadata.md](update-metadata.md)

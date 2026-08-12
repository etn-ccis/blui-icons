# Creating Slashed SVG Icons

This guide explains how to create and use slashed SVG icons in the Brightlayer UI icon library.

---

## Overview

There are two approaches to creating slashed icons. Choose based on your use case:

|                               | Approach 1: Build-time Script | Approach 2: Runtime React Component |
| ----------------------------- | ----------------------------- | ----------------------------------- |
| Output                        | A new `*_slashed.svg` file    | A React component                   |
| Modifies source icon          | No (new file)                 | No                                  |
| Framework required            | None                          | React + MUI                         |
| Dynamic / conditional slash   | No                            | Yes                                 |
| Works in icon font / PNG / RN | Yes                           | No                                  |

---

## The Slash Overlay Design

All approaches share the same two-path diagonal design on a 24×24 viewBox:

| Path                     | Stroke            | Purpose                                 |
| ------------------------ | ----------------- | --------------------------------------- |
| `M3.51 4.92L19.11 20.52` | `#727E84` (grey)  | The visible slash line                  |
| `M4.92 3.51L20.52 19.11` | `#FFFFFF` (white) | Offset border path for a cut-out effect |

---

## Approach 1 — Build-time Script

Bakes the slash permanently into a new SVG file. The output is standalone and framework-agnostic.

### When to use

- You need a distributable slashed icon (`ac_slashed.svg`, `battery_slashed.svg`, etc.)
- The icon needs to work in icon fonts, PNG exports, or React Native
- The slash is always present (not conditional)

### Scripts

Both scripts live in `packages/svg/scripts/` and must be run from the `packages/svg/` directory.

#### Single file — `generateSlashedSvg.js`

```bash
cd packages/svg

# Output: ac_slashed.svg (default)
node scripts/generateSlashedSvg.js --input ac.svg

# Output: custom name
node scripts/generateSlashedSvg.js --input ac.svg --output ac_disabled.svg

# Overwrite the input file in-place
node scripts/generateSlashedSvg.js --input ac.svg --overwrite
```

Or via the npm script:

```bash
yarn generate:slashed --input ac.svg
```

#### All files — `generateAllSlashedSvgs.js`

Loops over every `.svg` in `packages/svg/`, skips `slash_overlay.svg` and any already-slashed files, and writes `<name>_slashed.svg` alongside each source.

```bash
cd packages/svg
yarn generate:all-slashed
# → ac_slashed.svg, battery_slashed.svg, ... for every icon
```

### Using the generated file in the React demo

After generating, import and add the file to the icon list in `demos/react-demo/src/pages/svg.tsx`:

```tsx
import AcSlashed from '@brightlayer-ui/icons-svg/ac_slashed.svg';

// Add to the svgIcons array:
{ name: 'AC Slashed', filename: 'ac_slashed.svg', icon: AcSlashed }
```

---

## Approach 2 — Runtime React Component (`SlashedSvgIcon`)

Composites any base icon with a slash overlay at render time using CSS absolute positioning. The base icon file is never modified.

### When to use

- The slash is conditional (e.g., toggled by state)
- You want to reuse the same base icon with or without the slash
- You are working in a React + MUI context

### Component

Located at `demos/react-demo/src/components/SlashedSvgIcon.tsx`.

#### Props

| Prop       | Type     | Default  | Description                           |
| ---------- | -------- | -------- | ------------------------------------- |
| `iconSrc`  | `string` | required | Import path of the base SVG icon      |
| `slashSrc` | `string` | required | Import path of `slash_overlay.svg`    |
| `size`     | `number` | `48`     | Width and height in pixels            |
| `alt`      | `string` | `''`     | Accessible alt text for the base icon |

#### Implementation

```tsx
import React from 'react';
import { Box } from '@mui/material';

export const SlashedSvgIcon: React.FC<SlashedSvgIconProps> = ({ iconSrc, slashSrc, size = 48, alt = '' }) => (
    <Box sx={{ position: 'relative', width: size, height: size }}>
        <img src={iconSrc} alt={alt} width={size} height={size} />
        <img
            src={slashSrc}
            alt=""
            aria-hidden="true"
            width={size}
            height={size}
            style={{ position: 'absolute', inset: 0 }}
        />
    </Box>
);
```

### Usage

```tsx
import SlashOverlay from '@brightlayer-ui/icons-svg/slash_overlay.svg';
import MyIcon from '@brightlayer-ui/icons-svg/my_icon.svg';
import { SlashedSvgIcon } from '../components/SlashedSvgIcon';

// Default size (48px)
<SlashedSvgIcon iconSrc={MyIcon} slashSrc={SlashOverlay} />

// Custom size
<SlashedSvgIcon iconSrc={MyIcon} slashSrc={SlashOverlay} size={64} />

// Conditional slash
{isOffline
    ? <SlashedSvgIcon iconSrc={MyIcon} slashSrc={SlashOverlay} alt="My Icon (offline)" />
    : <img src={MyIcon} />
}
```

---

## Previewing Changes

Run the demo app from `demos/react-demo`:

```bash
cd demos/react-demo
yarn start
```

Open `http://localhost:5173` and navigate to the **SVG** page to see both the generated slashed SVGs and the `SlashedSvgIcon` component examples.

---

## Creating a New Slash Overlay Variant

If you need a slash with a different angle or style:

1. Create a new SVG file in `packages/svg/` (e.g., `slash_overlay_horizontal.svg`).
2. Follow the two-path pattern:
    - First path: `stroke="currentColor"` for the main slash line.
    - Second path: `stroke="#FFFFFF"` slightly offset for the white border effect.
3. Both paths should span the full 24×24 viewBox.
4. Register the new file in the package's icon list if required by the build process.

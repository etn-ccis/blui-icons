# Dark Theme SVG Variants

This document explains the approaches considered for making raw SVG assets visible on dark backgrounds, and why this package selected separate dark-variant files.

## Problem

The `@brightlayer-ui/icons-svg` package distributes raw `.svg` files. In many consuming applications, these files are imported as URLs and rendered with elements such as `img`.

When an SVG is rendered as an external image, it does not inherit the parent application's CSS `color`. That means an icon that relies on the default black fill, or even `fill="currentColor"`, will not automatically adapt to dark mode.

## Approaches Considered

### 1. Theme-aware single SVG using `currentColor` or internal CSS

Example options:

- Set paths to `fill="currentColor"`
- Add SVG-internal styles with `prefers-color-scheme`

Pros:

- One file per icon
- Works well when SVG markup is inline in the DOM
- No need to duplicate icon geometry

Cons:

- Does not reliably solve the main `icons-svg` use case where SVGs are loaded as external assets
- `currentColor` does not inherit from the parent app when the SVG is rendered through `img`
- `prefers-color-scheme` follows browser or OS theme, not necessarily the application's own theme toggle
- Behavior becomes inconsistent across consumers depending on how they render the asset

Decision:

- Rejected as the primary package-level solution for `@brightlayer-ui/icons-svg`

### 2. Redesign the icon with built-in contrast

Example options:

- Add a white or light halo behind the icon
- Add an outline or badge shape
- Build a permanent two-tone treatment into the artwork

Pros:

- One file per icon
- Works regardless of how the asset is rendered
- No consumer logic needed

Cons:

- Changes the visual language of the icon set
- Adds stylistic weight even when the icon is shown on light backgrounds
- Can look muddy or overly heavy at 24x24
- Difficult to apply consistently across the full icon library without a broader design change

Decision:

- Rejected as the default strategy because it changes the icon artwork rather than the theme behavior

### 3. Separate light and dark SVG assets

Example:

- `ac.svg`
- `ac_dark.svg`

Pros:

- Works for external SVG assets rendered with `img`
- Preserves the existing visual language of the icon set
- Gives consumers explicit control over which asset is used for a given surface
- Scales cleanly to additional variants when needed

Cons:

- Requires consumer-side asset selection based on theme
- Introduces additional files and metadata maintenance
- Not a zero-consumer-change solution

Decision:

- Selected for the SVG package because it is the most predictable asset-level solution for externally rendered SVG files

## Selected Convention

The base asset remains the default filename.

Examples:

- `ac.svg` remains the default asset
- `ac_dark.svg` is the dark-surface variant

Metadata in `packages/svg/index.json` can optionally point to the dark variant:

```json
{
  "name": "AC",
  "filename": "ac.svg",
  "variants": {
    "dark": "ac_dark.svg"
  }
}
```

This keeps backward compatibility for existing consumers that only know about `filename`, while allowing dark-aware consumers to opt into `variants.dark`.

## Why This Was Selected

This package ships raw SVG files, not only inline React components. Because of that distribution model, the solution must work when an icon is treated as an external image.

Separate dark assets were selected because they:

- work with the current package consumption pattern
- avoid forcing permanent outline or halo treatments into the artwork
- keep the default asset contract stable
- allow incremental adoption only for icons that actually need a dark variant

## Notes For Consumers

Consumers should:

- use `filename` by default
- switch to `variants.dark` when rendering on dark surfaces, if present
- fall back to `filename` when no dark variant exists

## Current Example

The first dark-variant example added with this convention is:

- `ac.svg`
- `ac_dark.svg`

If dark variants are later added for prebuilt slashed assets, the same naming rule should be used:

- `ac_slashed.svg`
- `ac_slashed_dark.svg`
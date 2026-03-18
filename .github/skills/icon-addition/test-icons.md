# Skill: Test Icons

## Purpose

Verify that newly added icons are correctly built and rendered.

## Trigger Phrases

- "Test icons"
- "Verify icons"
- "Check icon build"

---

## Visual Verification

### 1. Demo Project

Run the demo project to see all icons rendered:

```bash
cd demos/react-demo
yarn start
```

### 2. Check SVG Sprites

```bash
ls packages/svg/sprites/
```

### 3. Verify React Components

```bash
# Search for your new icon component
ls packages/mui/tsx/ | grep -i "YourIconName"

# Example: Find Face ID icon
ls packages/mui/tsx/ | grep -i "face"
```

### 4. Check Icon Font

Verify the icon appears in the font glyph map:

```bash
# Search in JSON glyph map
grep -i "your_icon_name" packages/icon-font/BrightlayerUIIcons.json
```

---

## Automated Tests

```bash
# Run all tests from repository root
yarn test

# Run specific package tests
cd packages/mui
yarn test

cd packages/svg
yarn test
```

---

## Manual Import Test

Create a test file to verify imports work:

### MUI Icons

```tsx
import { FaceId, LockLevel1, SizeXl } from '@brightlayer-ui/icons-mui';

function TestIcons() {
    return (
        <>
            <FaceId />
            <LockLevel1 />
            <SizeXl />
        </>
    );
}
```

### SVG Import

```tsx
import FaceIdSvg from '@brightlayer-ui/icons-svg/face_id.svg';
import LockLevel1Svg from '@brightlayer-ui/icons-svg/lock_level_1.svg';
```

### React Native

```tsx
import { FaceId, LockLevel1 } from '@brightlayer-ui/react-native-vector-icons';

function TestIcons() {
    return (
        <>
            <FaceId size={24} />
            <LockLevel1 size={24} />
        </>
    );
}
```

---

## Verification Checklist

- [ ] Icon appears in demo project
- [ ] SVG file exists in `packages/svg/`
- [ ] Component exists in `packages/mui/tsx/`
- [ ] Entry exists in `packages/icon-font/BrightlayerUIIcons.json`
- [ ] Icon renders correctly (no visual artifacts)
- [ ] Tests pass

---

## Common Issues

| Issue                     | Cause                              | Solution                          |
| ------------------------- | ---------------------------------- | --------------------------------- |
| Icon not found            | Filename mismatch                  | Check `META.json` filename field  |
| Icon renders incorrectly  | SVG has strokes or gradients       | Optimize SVG properly             |
| Component name wrong      | Filename contains invalid chars    | Use only lowercase and underscore |
| Import fails              | Package not rebuilt                | Run `yarn build` from root        |

---

## Next Step

After testing, update changelogs and versions.

See: [update-versions.md](update-versions.md)

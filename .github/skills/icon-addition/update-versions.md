# Skill: Update Changelogs and Versions

## Purpose

Update package versions and changelogs when adding new icons.

## Trigger Phrases

- "Update versions"
- "Update changelogs"
- "Bump icon package versions"
- "Update package versions for new icons"

---

## ⚠️ PREREQUISITE: Verify Build Completion

> **DO NOT update versions until you have verified the build completed successfully.**
>
> The build takes 5-10 minutes. If you update versions before the build finishes, your new icon components will NOT be in the packages.

### Required Verification Before Proceeding

```bash
# Verify your new icon's MUI component was generated
ls packages/mui/tsx/ | grep -i "YourIconName"

# Verify SVG was copied
ls packages/svg/ | grep -i "your_icon_name"
```

**If the files are missing, wait for the build to complete or re-run `yarn build`.**

---

## Version Bump Rules

| Change Type      | Version Bump | Example             |
| ---------------- | ------------ | ------------------- |
| New icons added  | **Minor**    | `1.16.0` → `1.17.0` |
| Bug fixes only   | **Patch**    | `1.16.0` → `1.16.1` |
| Breaking changes | **Major**    | `1.16.0` → `2.0.0`  |

**For new icons: Always bump the MINOR version.**

---

## Packages to Update

All 4 packages must be updated:

| Package                                     | `package.json`                    | `CHANGELOG.md`                    |
| ------------------------------------------- | --------------------------------- | --------------------------------- |
| `@brightlayer-ui/icons-svg`                 | `packages/svg/package.json`       | `packages/svg/CHANGELOG.md`       |
| `@brightlayer-ui/icons`                     | `packages/icon-font/package.json` | `packages/icon-font/CHANGELOG.md` |
| `@brightlayer-ui/icons-mui`                 | `packages/mui/package.json`       | `packages/mui/CHANGELOG.md`       |
| `@brightlayer-ui/react-native-vector-icons` | `packages/rn-vector/package.json` | `packages/rn-vector/CHANGELOG.md` |

---

## Step 1: Update package.json Versions

### packages/svg/package.json

```json
{
    "name": "@brightlayer-ui/icons-svg",
    "version": "1.17.0"
}
```

### packages/icon-font/package.json

```json
{
    "name": "@brightlayer-ui/icons",
    "version": "2.5.0"
}
```

### packages/mui/package.json

```json
{
    "name": "@brightlayer-ui/icons-mui",
    "version": "4.2.0"
}
```

### packages/rn-vector/package.json

```json
{
    "name": "@brightlayer-ui/react-native-vector-icons",
    "version": "3.2.0"
}
```

---

## Step 2: Update CHANGELOG.md Files

### Changelog Entry Format

Add new entry at the TOP of the changelog, below the `# Changelog` heading:

```markdown
## vX.Y.0 (Month DD, Year)

### Added

-   New icons: Icon Name 1, Icon Name 2, Icon Name 3.
```

### Example Entry

```markdown
## v1.17.0 (February 15, 2026)

### Added

-   New icons: Face ID, File PDF, File Doc, Database, Man Off, Lock Level 1, Lock Level 1 Outline, Lock Level 2, Lock Level 2 Outline, Lock Level 3, Lock Level 3 Outline, Unlock Level 1, Unlock Level 1 Outline, Unlock Level 2, Unlock Level 2 Outline, Unlock Level 3, Unlock Level 3 Outline, Lock Open Right, Lock Open Right Outline, Unlock Right Level 1, Unlock Right Level 1 Outline, Unlock Right Level 2, Unlock Right Level 2 Outline, Unlock Right Level 3, Unlock Right Level 3 Outline, Size XS, Size S, Size M, Size L, Size XL.
```

---

## Template for All Packages

When adding the same icons to all packages, use the same changelog entry text:

```markdown
## vX.Y.0 (Month DD, Year)

### Added

-   New icons: [List all new icon names here].
```

---

## Checklist

- [ ] `packages/svg/package.json` version updated
- [ ] `packages/svg/CHANGELOG.md` entry added
- [ ] `packages/icon-font/package.json` version updated
- [ ] `packages/icon-font/CHANGELOG.md` entry added
- [ ] `packages/mui/package.json` version updated
- [ ] `packages/mui/CHANGELOG.md` entry added
- [ ] `packages/rn-vector/package.json` version updated
- [ ] `packages/rn-vector/CHANGELOG.md` entry added

---

## Next Step

After updating versions, commit changes and create a PR.

See: [publish-icons.md](publish-icons.md)

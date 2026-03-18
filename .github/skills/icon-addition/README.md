# Icon Addition Skills

This folder contains modular skill documents for adding new icons to the BLUI Icons repository.

## Main Skill

- [icon-addition-skill.md](icon-addition-skill.md) - Complete icon addition workflow

## Step-by-Step Skills

| Step | Skill File | Description |
|------|------------|-------------|
| 1 | [add-svg-to-design.md](add-svg-to-design.md) | Add SVG and PNG files |
| 2 | [update-metadata.md](update-metadata.md) | Update META.json with icon entries |
| 3 | [build-packages.md](build-packages.md) | Build all icon packages ⚠️ |
| 4 | [test-icons.md](test-icons.md) | Test and verify icons |
| 5 | [update-versions.md](update-versions.md) | Update changelogs and versions |
| 6 | [publish-icons.md](publish-icons.md) | Commit, PR, and publish |

## ⚠️ CRITICAL: Build Time Warning

> **The full build (Step 3) takes 5-10 minutes** because the SVG package clones the Material Design icons repository.
>
> **You MUST wait for the build to complete with `exit code 0` for ALL packages before proceeding to Steps 4-6.**
>
> Skipping this verification will result in missing icon components in the MUI package.

### Verify Build Completion

```bash
# Check your new icon's MUI component was generated
ls packages/mui/tsx/ | grep -i "YourIconName"
```

## Usage

These skills can be referenced individually or as a complete workflow. Each skill contains:

- **Purpose** - What the skill accomplishes
- **Trigger Phrases** - Common phrases that invoke this skill
- **Steps** - Detailed instructions
- **Examples** - Code/configuration examples
- **Next Step** - Link to the following skill in the workflow

## Quick Reference

```
□ 1. Add SVGs to /design/{Category}/ folder
□ 2. Add PNGs to packages/png/png24/ and packages/png/png48/
□ 3. Update /design/META.json with entries
□ 4. Run `yarn build` (WAIT 5-10 min for completion!)
□ 5. Verify: ls packages/mui/tsx/ | grep -i "YourIcon"
□ 6. Test icons in demo project
□ 7. Update versions and changelogs
□ 8. Commit and create PR
```

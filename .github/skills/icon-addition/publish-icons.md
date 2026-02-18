# Skill: Publish Icons

## Purpose

Complete the icon addition process by committing changes and publishing packages.

## Trigger Phrases

- "Publish icons"
- "Commit icon changes"
- "Create icon PR"

---

## Pre-Publish Checklist

Complete all items before publishing:

- [ ] SVG files added to correct `/design` subfolder
- [ ] `META.json` updated with all new icon entries
- [ ] JSON syntax validated
- [ ] `yarn build` completes successfully
- [ ] Icons visible in demo project
- [ ] All `package.json` versions updated (minor bump)
- [ ] All `CHANGELOG.md` files updated
- [ ] Tests pass (`yarn test`)
- [ ] Code formatted (`yarn prettier`)

---

## Step 1: Validate JSON

```bash
node -e "JSON.parse(require('fs').readFileSync('design/META.json'))"
```

---

## Step 2: Run Build

```bash
yarn build
```

---

## Step 3: Run Tests

```bash
yarn test
```

---

## Step 4: Format Code

```bash
yarn prettier
```

---

## Step 5: Commit Changes

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat(icons): add new [Category] icons

- Add [Icon1], [Icon2], [Icon3] icons
- Update META.json with new entries
- Bump package versions to X.Y.0"
```

### Commit Message Format

```
feat(icons): add new [Category] icons

- Add specific icon names
- Update META.json
- Bump versions
```

---

## Step 6: Push and Create PR

```bash
# Push to remote branch
git push origin your-branch-name
```

Then create a Pull Request on GitHub.

---

## Step 7: Publish (After PR Merge)

Packages are published automatically via CI/CD after PR merge.

### Manual Publishing (if needed)

```bash
# Login to npm
npm login

# Publish each package
cd packages/svg && npm publish
cd ../icon-font && npm publish
cd ../mui && npm publish
cd ../rn-vector && npm publish
```

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
□ 8. Run `yarn test` and `yarn prettier`
□ 9. Commit and create PR
□ 10. Publish after approval
```

---

## Troubleshooting

| Issue                          | Solution                                     |
| ------------------------------ | -------------------------------------------- |
| Build fails                    | Check `META.json` syntax                     |
| Tests fail                     | Review test output, fix issues               |
| Publish fails                  | Check npm login, package permissions         |
| Icon not in published package  | Verify build completed before commit         |

---

## Related Skills

- [add-svg-to-design.md](add-svg-to-design.md) - Add SVG files
- [update-metadata.md](update-metadata.md) - Update META.json
- [build-packages.md](build-packages.md) - Build packages
- [test-icons.md](test-icons.md) - Test icons
- [update-versions.md](update-versions.md) - Update versions

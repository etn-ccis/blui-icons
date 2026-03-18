# Skill: Update Icon Metadata

## Purpose

Add metadata entries to `/design/META.json` for new icons.

## Trigger Phrases

- "Update META.json"
- "Add icon metadata"
- "Update icon entries"

---

## File Location

`/design/META.json`

---

## Schema

```json
{
    "icons": [
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
    ]
}
```

---

## Field Requirements

| Field         | Type   | Required | Description                                   |
| ------------- | ------ | -------- | --------------------------------------------- |
| `name`        | string | ✅       | Human-readable display name (Title Case)      |
| `filename`    | string | ✅       | Exact SVG filename with `.svg` extension      |
| `family`      | array  | ✅       | Category tags for organization                |
| `style`       | string | ✅       | `"baseline"`, `"outline"`, or `"twotone"`     |
| `tags`        | array  | ✅       | 5-10 search keywords                          |
| `description` | string | ✅       | Brief description (under 100 characters)      |
| `author`      | string | ✅       | Creator name (default: `"Brightlayer UI"`)    |
| `size`        | number | ✅       | Icon size in pixels (default: `24`)           |

---

## Style Values

| Style        | Description                    | Filename Pattern        |
| ------------ | ------------------------------ | ----------------------- |
| `baseline`   | Filled/solid icon              | `icon_name.svg`         |
| `outline`    | Outline/stroke version         | `icon_name_outline.svg` |
| `twotone`    | Two-tone variation             | `icon_name_twotone.svg` |

---

## Examples

### Single Icon

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

### Icon with Variants

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

### Size Variant Icons

```json
{
    "name": "Size XS",
    "filename": "size_xs.svg",
    "family": ["System", "Size"],
    "style": "baseline",
    "tags": ["size", "extra small", "xs", "dimension", "scale"],
    "description": "Extra small size indicator",
    "author": "Brightlayer UI",
    "size": 24
},
{
    "name": "Size S",
    "filename": "size_s.svg",
    "family": ["System", "Size"],
    "style": "baseline",
    "tags": ["size", "small", "s", "dimension", "scale"],
    "description": "Small size indicator",
    "author": "Brightlayer UI",
    "size": 24
}
```

---

## Best Practices

- **Tags:** Include 5-10 relevant keywords for searchability
- **Family:** Use existing categories when possible; create new ones sparingly
- **Description:** Keep concise but informative (under 100 characters)
- **Consistency:** Match naming patterns of existing similar icons
- **filename:** Must match the actual SVG filename exactly (case-sensitive)

---

## Validation

After editing, validate JSON syntax:

```bash
# Using Node.js
node -e "JSON.parse(require('fs').readFileSync('design/META.json'))"

# Using jq
jq . design/META.json > /dev/null && echo "Valid JSON"
```

---

## Next Step

After updating metadata, build the packages.

See: [build-packages.md](build-packages.md)

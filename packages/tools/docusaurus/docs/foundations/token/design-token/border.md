---
sidebar_position: 4
---

# Border

## Width

|                                                                      | Token                          | Description                                       |
| -------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------- |
| <div className="border-width-preview border-width-default"></div>    | `--ks-border-width-default`    | The default width for elements featuring a border |
| <div className="border-width-preview border-width-emphasized"></div> | `--ks-border-width-emphasized` | For highlighting important elements               |

<CH.Section>
<CH.Code>

```json border.json
{
  "ks": {
    "border-width": {
      "default": {
        "value": "2px"
      },
      "emphasized": {
        "value": "3px"
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-border-width-default: 2px;
  --ks-border-width-emphasized: 3px;
}
```

</CH.Code>
</CH.Section>

## Radius

#### Control

`--ks-border-radius-control`

<div className="border-radius-preview border-radius-control"></div>

For small horizontally stretched elements.

#### Card

`--ks-border-radius-card`

<div className="border-radius-preview border-radius-card"></div>

For medium sized vertically stretched elements.

#### Surface

`--ks-border-radius-surface`

<div className="border-radius-preview border-radius-surface"></div>

For large screen covering elements.

#### Pill

`--ks-border-radius-pill`

<div className="border-radius-preview border-radius-pill"></div>

For small pill sized elements.

#### Circle

`--ks-border-radius-circle`

<div className="border-radius-preview border-radius-circle"></div>

For circular elements.

<CH.Section>
<CH.Code>

```json border.json
{
  "ks": {
    "border-radius": {
      "control": {
        "value": "0px",
        "token": {
          "category": "Border Radius",
          "presenter": "BorderRadius"
        }
      },
      "card": {
        "value": "0px",
        "token": {
          "category": "Border Radius",
          "presenter": "BorderRadius"
        }
      },
      "surface": {
        "value": "0px",
        "token": {
          "category": "Border Radius",
          "presenter": "BorderRadius"
        }
      },
      "pill": {
        "value": "999px",
        "token": {
          "category": "Border Radius",
          "presenter": "BorderRadius"
        }
      },
      "circle": {
        "value": "50%",
        "token": {
          "category": "Border Radius",
          "presenter": "BorderRadius"
        }
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-border-radius-control: 0px;
  --ks-border-radius-card: 0px;
  --ks-border-radius-surface: 0px;
  --ks-border-radius-pill: 999px;
  --ks-border-radius-circle: 50%;
}
```

</CH.Code>
</CH.Section>

###

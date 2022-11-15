---
sidebar_position: 5
---

# Shadow

The token can be found in `shadow.json`.

## Core Token

### Opacity

|                                                               | Token                                   |
| ------------------------------------------------------------- | --------------------------------------- |
| <div className="opacity-preview opacity-control"></div>       | `--ks-box-shadow-opacity-control`       |
| <div className="opacity-preview opacity-control-hover"></div> | `--ks-box-shadow-opacity-control-hover` |
| <div className="opacity-preview opacity-card"></div>          | `--ks-box-shadow-opacity-card`          |
| <div className="opacity-preview opacity-card-hover"></div>    | `--ks-box-shadow-opacity-card-hover`    |
| <div className="opacity-preview opacity-surface"></div>       | `--ks-box-shadow-opacity-surface`       |
| <div className="opacity-preview opacity-surface-hover"></div> | `--ks-box-shadow-opacity-surface-hover` |

<CH.Section>
<CH.Code rows={20}>

```json box-shadow.json
{
  "ks": {
    "box-shadow": {
      "opacity": {
        "control": {
          "_": {
            "value": "0.2"
          },
          "hover": {
            "value": "0.3"
          }
        },
        "card": {
          "_": {
            "value": "0.2"
          },
          "hover": {
            "value": "0.3"
          }
        },
        "surface": {
          "_": {
            "value": "0.1"
          },
          "hover": {
            "value": "0.2"
          }
        }
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-box-shadow-opacity-control: 0.2;
  --ks-box-shadow-opacity-control-hover: 0.3;
  --ks-box-shadow-opacity-card: 0.2;
  --ks-box-shadow-opacity-card-hover: 0.3;
  --ks-box-shadow-opacity-surface: 0.1;
  --ks-box-shadow-opacity-surface-hover: 0.2;
}
```

</CH.Code>
</CH.Section>

### Color

The `color` token is an rgba value that features `opacity` as the `alpha` value.

|                                                           | Token                                 |
| --------------------------------------------------------- | ------------------------------------- |
| <div className="color-preview color-control"></div>       | `--ks-box-shadow-color-control`       |
| <div className="color-preview color-control-hover"></div> | `--ks-box-shadow-color-control-hover` |
| <div className="color-preview color-card"></div>          | `--ks-box-shadow-color-card`          |
| <div className="color-preview color-card-hover"></div>    | `--ks-box-shadow-color-card-hover`    |
| <div className="color-preview color-surface"></div>       | `--ks-box-shadow-color-surface`       |
| <div className="color-preview color-surface-hover"></div> | `--ks-box-shadow-color-surface-hover` |

<CH.Section>
<CH.Code rows={20}>

```json box-shadow.json
{
  "ks": {
    "box-shadow": {
      "color": {
        "control": {
          "_": {
            "value": "rgba(0,0,0,{ks.box-shadow.opacity.control._})"
          },
          "hover": {
            "value": "rgba(0,0,0,{ks.box-shadow.opacity.control.hover})"
          }
        },
        "card": {
          "_": {
            "value": "rgba(0,0,0,{ks.box-shadow.opacity.card._})"
          },
          "hover": {
            "value": "rgba(0,0,0,{ks.box-shadow.opacity.card.hover})"
          }
        },
        "surface": {
          "_": {
            "value": "rgba(0,0,0,{ks.box-shadow.opacity.surface._})"
          },
          "hover": {
            "value": "rgba(0,0,0,{ks.box-shadow.opacity.surface.hover})"
          }
        }
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-box-shadow-color-control: rgba(
    5,
    5,
    5,
    var(--ks-box-shadow-opacity-control)
  );
  --ks-box-shadow-color-control-hover: rgba(
    5,
    5,
    5,
    var(--ks-box-shadow-opacity-control-hover)
  );
  --ks-box-shadow-color-card: rgba(5, 5, 5, var(--ks-box-shadow-opacity-card));
  --ks-box-shadow-color-card-hover: rgba(
    5,
    5,
    5,
    var(--ks-box-shadow-opacity-card-hover)
  );
  --ks-box-shadow-color-surface: rgba(
    5,
    5,
    5,
    var(--ks-box-shadow-opacity-surface)
  );
  --ks-box-shadow-color-surface-hover: rgba(
    5,
    5,
    5,
    var(--ks-box-shadow-opacity-surface-hover)
  );
}
```

</CH.Code>
</CH.Section>

## Semantic Token

### Shadow Types

Every shadow type also has a hover concept.

#### Control

`--ks-box-shadow-control`  
`--ks-box-shadow-control-hover`

<div className="shadow-preview shadow-control"></div>

For small horizontally stretched elements.

#### Card

`--ks-box-shadow-card`  
`--ks-box-shadow-card-hover`

<div className="shadow-preview shadow-card"></div>

For medium sized vertically stretched elements.

#### Surface

`--ks-box-shadow-surface`  
`--ks-box-shadow-surface-hover`

<div className="shadow-preview shadow-surface"></div>

For large screen covering elements.

<CH.Section>
<CH.Code rows={20}>

```json box-shadow.json
{
  "ks": {
    "box-shadow": {
      "control": {
        "_": {
          "value": "0 1px 2.75px {ks.box-shadow.color.control._}",
          "token": {
            "category": "Box Shadow",
            "presenter": "Shadow"
          }
        },
        "hover": {
          "value": "0 1px 5.5px {ks.box-shadow.color.control.hover}"
        }
      },
      "card": {
        "_": {
          "value": "0 1px 5.5px {ks.box-shadow.color.card._}",
          "token": {
            "category": "Box Shadow",
            "presenter": "Shadow"
          }
        },
        "hover": {
          "value": "0 1px 11px {ks.box-shadow.color.card.hover}"
        }
      },
      "surface": {
        "_": {
          "value": "0 1px 11px {ks.box-shadow.color.surface._}",
          "token": {
            "category": "Box Shadow",
            "presenter": "Shadow"
          }
        },
        "hover": {
          "value": "0 1px 22px {ks.box-shadow.color.surface.hover}"
        }
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-box-shadow-control: 0 1px 2.75px var(--ks-box-shadow-color-control);
  --ks-box-shadow-control-hover: 0 1px 5.5px var(--ks-box-shadow-color-control-hover);
  --ks-box-shadow-card: 0 1px 5.5px var(--ks-box-shadow-color-card);
  --ks-box-shadow-card-hover: 0 1px 11px var(--ks-box-shadow-color-card-hover);
  --ks-box-shadow-surface: 0 1px 11px var(--ks-box-shadow-color-surface);
  --ks-box-shadow-surface-hover: 0 1px 22px var(--ks-box-shadow-color-surface-hover);
}
```

</CH.Code>
</CH.Section>

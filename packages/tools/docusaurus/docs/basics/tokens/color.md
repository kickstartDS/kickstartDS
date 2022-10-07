---
sidebar_position: 2
---

# Color

## Core token

### Color palette

These are the base colors. They are referenced in semantic colors and shouldnt be applied directly.

|                                                         | Token                    | Application                                            |
| ------------------------------------------------------- | ------------------------ | ------------------------------------------------------ |
| <div className="color-preview color-primary"></div>     | `--ks-color-primary`     | High priority elements                                 |
| <div className="color-preview color-fg"></div>          | `--ks-color-fg`          | Default foreground color, most prevelant in copy text. |
| <div className="color-preview color-link"></div>        | `--ks-color-link`        | Hyperlink color                                        |
| <div className="color-preview color-transparent"></div> | `--ks-color-transparent` | Elements featuring transparency                        |

### Color scales

`--ks-color-primary` and `--ks-color-fg` have native scales.  
`alpha` is a transparency scale.  
`to-bg` is a scale that mixes in the background-color (`--ks-color-fg-inverted`).

<div className="split-table">

|                                                             | to-bg                        |
| ----------------------------------------------------------- | ---------------------------- |
| <div className="color-preview color-primary-to-bg-1"></div> | `--ks-color-primary-to-bg-1` |
| <div className="color-preview color-primary-to-bg-2"></div> | `--ks-color-primary-to-bg-2` |
| <div className="color-preview color-primary-to-bg-3"></div> | `--ks-color-primary-to-bg-3` |
| <div className="color-preview color-primary-to-bg-4"></div> | `--ks-color-primary-to-bg-4` |
| <div className="color-preview color-primary-to-bg-5"></div> | `--ks-color-primary-to-bg-5` |
| <div className="color-preview color-primary-to-bg-6"></div> | `--ks-color-primary-to-bg-6` |
| <div className="color-preview color-primary-to-bg-7"></div> | `--ks-color-primary-to-bg-7` |
| <div className="color-preview color-primary-to-bg-8"></div> | `--ks-color-primary-to-bg-8` |
| <div className="color-preview color-primary-to-bg-9"></div> | `--ks-color-primary-to-bg-9` |

|                                                             | alpha                        |
| ----------------------------------------------------------- | ---------------------------- |
| <div className="color-preview color-primary-alpha-1"></div> | `--ks-color-primary-alpha-1` |
| <div className="color-preview color-primary-alpha-2"></div> | `--ks-color-primary-alpha-2` |
| <div className="color-preview color-primary-alpha-3"></div> | `--ks-color-primary-alpha-3` |
| <div className="color-preview color-primary-alpha-4"></div> | `--ks-color-primary-alpha-4` |
| <div className="color-preview color-primary-alpha-5"></div> | `--ks-color-primary-alpha-5` |
| <div className="color-preview color-primary-alpha-6"></div> | `--ks-color-primary-alpha-6` |
| <div className="color-preview color-primary-alpha-7"></div> | `--ks-color-primary-alpha-7` |
| <div className="color-preview color-primary-alpha-8"></div> | `--ks-color-primary-alpha-8` |
| <div className="color-preview color-primary-alpha-9"></div> | `--ks-color-primary-alpha-9` |

</div>

## Semantic token

Color-token whith a dedicated application.

| Token suffix | Application                                                             |
| ------------ | ----------------------------------------------------------------------- |
| `primary`    | Highlights elements. The most prevalent color of the design system.     |
| `accent`     | Highlights elements that are hierarchically second to primary elements. |
| `default`    | The default color of elements. Used as a fallback.                      |
| `clear`      | Elements featuring transparency                                         |
| `interface`  | Signals user interactability                                            |

### Color types

Semantic colors are categorised into **background-color**, **border-color** & **text-color**.

|                                                          | Token type         | Application                                                             |
| -------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------- |
| <div className="color-preview background-primary"></div> | `background-color` | Highlights elements. The most prevalent color of the design system.     |
| <div className="color-preview background-accent"></div>  | `text-color`       | Highlights elements that are hierarchically second to primary elements. |
| <div className="color-preview background-default"></div> | `border-color`     | The default background-color. Used on page the background.              |

### Interactive concept

Applies to primary-, interface- & clear-token

|                                                                 | Token                                              | Application                      |
| --------------------------------------------------------------- | -------------------------------------------------- | -------------------------------- |
| <div className="color-preview background-primary"></div>        | `--ks-background-color-primary-interactive`        | Signals interactability          |
| <div className="color-preview background-primary-hover"></div>  | `--ks-background-color-primary-interactive-hover`  | State of the element on hover    |
| <div className="color-preview background-primary-active"></div> | `--ks-background-color-primary-interactive-active` | State of the element when active |

```json title="background-color.json"
"interactive": {
  "base": {
    "value": "{ks.color.primary.base}",
    "attributes": {
      "category": "color"
    },
    "token": {
      "category": "Colors: Background Primary",
      "presenter": "Color"
    }
  },
  "hover": {
    "base": {
      "value": "{ks.color.primary.to-bg.2.base}",
      "attributes": {
        "category": "color"
      },
      "token": {
        "category": "Colors: Background Primary",
        "presenter": "Color"
      }
    }
  },
  "active": {
    "base": {
      "value": "{ks.color.primary.to-bg.4.base}",
      "attributes": {
        "category": "color"
      },
      "token": {
        "category": "Colors: Background Primary",
        "presenter": "Color"
      }
    }
  }
},
```

### Translucent atribute

Applies to primary-token

|                                                              | Token                                       |
| ------------------------------------------------------------ | ------------------------------------------- |
| <div className="color-preview background-translucent"></div> | `--ks-background-color-primary-translucent` |

```json title="background-color.json"
"translucent": {
  "base": {
    "value": "{ks.color.primary.alpha.8.base}",
    "attributes": {
      "category": "color"
    },
    "token": {
      "category": "Colors: Background Primary",
      "presenter": "Color"
    }
  }
}
```

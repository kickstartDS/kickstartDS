---
sidebar_position: 3
---

# Spacing

## Spacing scale

These are the base colors. They are referenced in semantic colors and shouldnt be applied directly.

| Spacing                                             | Token              |
| --------------------------------------------------- | ------------------ |
| <div className="spacing-preview spacing-xxs"></div> | `--ks-spacing-xxs` |
| <div className="spacing-preview spacing-xs"></div>  | `--ks-spacing-xs`  |
| <div className="spacing-preview spacing-s"></div>   | `--ks-spacing-s`   |
| <div className="spacing-preview spacing-m"></div>   | `--ks-spacing-m`   |
| <div className="spacing-preview spacing-l"></div>   | `--ks-spacing-l`   |
| <div className="spacing-preview spacing-xl"></div>  | `--ks-spacing-xl`  |
| <div className="spacing-preview spacing-xxl"></div> | `--ks-spacing-xxl` |

## Semantic spacing

|                                                          |         |
| -------------------------------------------------------- | ------- |
| <div className="color-preview color-primary"></div>      | Spacing |
| <div className="color-preview background-default"></div> | Content |

<div className="spacing-preview-grid">
  <div>
    `--ks-spacing-inset-m`
    <div className="spacing spacing-inset"></div>
    Even padding
  </div>
  <div>
    `--ks-spacing-inset-squish-m`
    <div className="spacing spacing-inset-squish"></div>
    Reduced top and bottom padding, resulting in a vertically condensed visual display
  </div>
  <div>
    `--ks-spacing-inset-stretch-m`
    <div className="spacing spacing-inset-stretch"></div>
    Increased top and bottom padding, resulting in a vertically expanded visual display
  </div>
  <div>
    `--ks-spacing-stack-m`
    <div className="spacing spacing-stack"></div>
    Vertical gap between two elements
  </div>
  <div>
    `--ks-spacing-inline-m`
    <div className="spacing spacing-inline"></div>
    Horizontal gap between two elements
  </div>
</div>

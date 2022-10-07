---
sidebar_position: 2
---

# Generate Token Set

Generate your token-set by configuring `token-primitives.json` and executing `yarn init-tokens`.

You apply basic corporate design elements to the design system.

- Color Palette
- Spacing Scales
- Font-size scales
- Font-families
- Font-weights
- Breakpoints

## Color Palette

```json title="token-primitives.json"
  "color": {
    "primary": "#05566a",
    "primary-inverted": "#ecff00",
    "background": "#fff",
    "foreground": "#050505",
    "link": "#5D5DD5",
    "link-inverted": "#C6C6FF"
  },
```

**primary/primary-inverted:**  
Will be used to signal important/interactive elements. The most prevalent color of the design system.

**background:**  
Will be used as the default background-color.

**foreground:**  
Will be used as the default text-color. Note: upon inversion, foreground and background will be swapped!

**link/link-inverted:**  
Will be used to signal text-links.

## Spacing Scales

```json title="token-primitives.json"
  "spacing": {
    "base": 8,
    "scale-ratio": 1.35,
    "bp-ratio": 1.15
  },
```

**base:**  
Set the base spacing pixel value.  
It will represent the `spacing-m` value on the spacing scale.  
This value will be applied directly on mobile devices, on further breakpoints it will be scaled up.

**scale-ratio:**  
Set the value the m spacing value will be scaled by, down to `xxs` and up to `xxl`.

**bp-factor:**  
Set a single value by which the base spacing will be multiplied on each breakpoint.

## Fonts

```json title="token-primitives.json"
"font": {
    "display": {
      "family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      "font-size": 18,
      "line-height": 1.5,
      "scale-ratio": 1.225,
      "bp-factor": {
        "phone": 1.167,
        "tablet": 1.333
      }
    },
    "copy": {
      "family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      "font-size": 16,
      "line-height": 1.5,
      "scale-ratio": 1.225,
      "bp-factor": {
        "tablet": 1.125
      }
    },
    "ui": {
      "family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      "font-size": 16,
      "line-height": 1.5,
      "scale-ratio": 1.225,
      "bp-factor": {
        "tablet": 1.125
      }
    },
    "mono": {
      "family": "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
      "font-size": 16,
      "line-height": 1.75,
      "scale-ratio": 1.225,
      "bp-factor": {
        "tablet": 1.125
      }
    }
  },
```

**display:**  
Will be used on headlines.

**copy:**  
Will be used on copy text.

**ui:**  
Will be used on user interface.

**mono:**  
Will be used on user interface.

**family:**  
Assign a font-family to the font type.

**font-size:**  
Set the base font size pixel value.
It will represent the `font-size-*-m` value on the font-size scale.  
This value will be applied directly on mobile screens, on larger breakpoints it will be scaled up.

**bp-factor:**  
Set the value by which the base font size will be multiplied, when on a certain breakpoint.

## Font Weights

```json title="token-primitives.json"
  "font-weight": {
    "light": 300,
    "regular": 400,
    "semi-bold": 600,
    "bold": 700
  },
```

**font-weight:**  
Add font-weights and the corresponding values to your design system.

## Breakpoints

```json title="token-primitives.json"
  "breakpoints": {
    "phone": 576,
    "tablet": 768,
    "laptop": 992,
    "desktop": 1200
  }
```

**breakpoints:**  
Set the screen sizes from which on the according breakpoint will be applied.

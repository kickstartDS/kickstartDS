---
sidebar_position: 2
---

# Design Token

Design Token are the smallest building blocks, the core pieces of a design system. Design Token in kickstartDS are stored in a JSON format and can be transformed to be used on any platform.

## Core Token

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

Explore all [color Token](/docs/basics/tokens/color)

## Semantic Token

Semantic Token reference core Token and suggest an intended use for it. Because of this their names should never reference the value but only what the Token is intended for. They have a high level of abstraction. A typical name could be color-background or shadow-floating-hovered.

The kickstartDS Token taxonomy relies on the article [Naming Token in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) by [Nathan Curtis](https://medium.com/@nathanacurtis), who really is the number one mate in the design systems space. Thank you for sharing you passion and knowledge, this is really empowering the DS community 🙏

## Design Token Layering

_TODO_

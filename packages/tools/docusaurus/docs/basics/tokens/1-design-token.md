---
sidebar_position: 1
---

# Design Token

Design tokens are the smallest building blocks, the core pieces of a design system. Design tokens in kickstartDS are stored in a JSON format and can be transformed to be used on any platform.

## Core Tokens

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

Explore all [color token](/docs/basics/tokens/color)

## Semantic token

Semantic tokens reference core tokens and suggest an intended use for it. Because of this their names should never reference the value but only what the token is intended for. They have a high level of abstraction. A typical name could be color-background or shadow-floating-hovered.

The kickstartDS token taxonomy relies on the article [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) by [Nathan Curtis](https://medium.com/@nathanacurtis), who really is the number one mate in the design systems space. Thank you for sharing you passion and knowledge, this is really empowering the DS community 🙏

## Design Token Layering

_TODO_

---
sidebar_position: 3
---

import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

# Token

## What are tokens?

**Tokens** are the smallest building blocks of a design system. Based on the values they store, they are usually used across multiple tools and platforms to ensure consistence and matching brand identity. Because tokens are described abstraction, the defined values can change without disturbing the designer or developer experience.

> The single source of truth to name and store a design decision, distributed so teams can use it across design tools and coding languages.  
> _-W3C Design Tokens Community Group_

**kickstartDS** differentiates between Design and Component token. Whereas described above Design Token store values e.g. color, typography, spacing, animation, etc., Component Tokens represent the properties and values that are contained in a component, e.g. container, label text, icons, and states.

<Section spaceBefore="none" spaceAfter="none" width="full">
  <TeaserBox
    link={{
      size: 'small',
      href: '/docs/basics/tokens/design-token',
      label: "Explore Design token",
      variant: "outline",
    }}
    text="encode your main brand identity, including colors, fonts and typography. "
    topic="Design tokens"
  />
  <TeaserBox
    link={{
      size: 'small',
      href: '/docs/basics/tokens/component-tokens/',
      label: "Why do I need these?",
      variant: "outline",
    }}
    text="TODO"
    topic="Component tokens"
  />
</Section>

## Core token

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

## Semantic token

```json title="token-primitives.json"
  TODO
```

### Inverted display

---
sidebar_position: 3
---

import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

# Token

## What are Token?

**Token** are the smallest building blocks of a design system. Based on the values they store, they are usually used across multiple tools and platforms to ensure consistence and matching brand identity. Because Token are described abstraction, the defined values can change without disturbing the designer or developer experience.

> The single source of truth to name and store a design decision, distributed so teams can use it across design tools and coding languages.  
> _-W3C Design Token Community Group_

**kickstartDS** differentiates between Design and Component Token. Whereas described above Design Token store values e.g. color, typography, spacing, animation, etc., Component Token represent the properties and values that are contained in a component, e.g. container, label text, icons, and states.

<Section ks-theme="docs" spaceBefore="none" spaceAfter="small" width="full">
  <TeaserBox
    link={{
      size: 'small',
      href: '/docs/basics/tokens/design-token',
      label: "Explore Design token",
      variant: "outline",
    }}
    text="encode your main brand identity, including colors, fonts and typography. "
    topic="Design Token"
  />
  <TeaserBox
    link={{
      size: 'small',
      href: '/docs/basics/tokens/component-token/',
      label: "Why do I need these?",
      variant: "outline",
    }}
    text="TODO"
    topic="Component Token"
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

## Semantic Token

```json title="token-primitives.json"
TODO
```

### Inverted display

---
sidebar_position: 3
---

import { Quote } from '@kickstartds/content/lib/quote';
import { Section } from '@kickstartds/base/lib/section';
import { Inline, Split, Stack, Grid, Columns, Column } from "@bedrock-layout/primitives";

# Bedrock

We use Bedrock as our library of choice when it comes to layouting:

<Quote
  byline="The Lodash of Web Layouts"
  source="BEDROCK LAYOUT PRIMITIVES"
  text="A collection of utility components that are designed to be used as building blocks for your web application's layout."
/>

## Components vs. Layout

TODO if we find a good description

## Integrating with kickstartDS

The kickstartDS spacing Token are mapped to the internal Bedrock scale in the `BedrockProvider.jsx` file.

<CH.Code >

```jsx BedrockProvider.jsx
import { ThemeProvider } from 'styled-components';

const theme = {
  spacing: {
    none: '0px',
    xxs: 'var(--ks-spacing-xxs)',
    xs: 'var(--ks-spacing-xs)',
    sm: 'var(--ks-spacing-s)',
    md: 'var(--ks-spacing-m)',
    lg: 'var(--ks-spacing-l)',
    xl: 'var(--ks-spacing-xl)',
    xxl: 'var(--ks-spacing-xxl)',
  },
};

export const BedrockProvider = (props) => (
  <ThemeProvider theme={theme} {...props} />
);
```

</CH.Code>

## Tips & Tricks

With the `switchAt` property, precisely responsive layouts can be created.<br/>
The witdh at which a layout will switch from a row to a column display can be set.<br/>
Its supported in the `Columns`, `Inline` and `Split` Components.

## Examples

A couple common use cases:

### Split

Elements can be placed next width varying widths.

<div ks-theme="section-preview">
<Split gutter="md" fraction="3/4">
  <div className="section-preview--child">Content</div>
  <div className="section-preview--child">Content</div>
</Split>
</div>

<CH.Code >

```jsx layout.jsx
import { Split } from '@bedrock-layout/primitives';

<Split gutter="md" fraction="3/4">
  <div className="section-preview--child">Content</div>
  <div className="section-preview--child">Content</div>
</Split>;
```

</CH.Code>

### Stack

A simple way to stack elements on top of each other.

<div ks-theme="section-preview">
<Stack gutter="md" >
  <div className="section-preview--child">Content</div>
  <div className="section-preview--child">Content</div>
</Stack>
</div>

<CH.Code >

```jsx layout.jsx
import { Stack } from '@bedrock-layout/primitives';

<Stack gutter="md">
  <div className="section-preview--child">Content</div>
  <div className="section-preview--child">Content</div>
</Stack>;
```

</CH.Code>

### Columns

For a precise column layout. Elements can be streteched over multiple columns.

<div ks-theme="section-preview">
<Columns gutter="md" columns={4}>
  <div className="section-preview--child">Content</div>
  <Column span={2}>
    <div className="section-preview--child">Content</div>
  </Column>
  <div className="section-preview--child">Content</div>
</Columns>
</div>

<CH.Code >

```jsx layout.jsx
import { Columns, Column } from '@bedrock-layout/primitives';

<Columns gutter="md" columns={4}>
  <div className="section-preview--child">Content</div>
  <Column span={2}>
    <div className="section-preview--child">Content</div>
  </Column>
  <div className="section-preview--child">Content</div>
</Columns>;
```

</CH.Code>

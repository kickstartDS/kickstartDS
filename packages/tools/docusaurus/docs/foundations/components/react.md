---
sidebar_position: 4
---

# React

## Table of contents:

- Render Props
- Replace with Context

## Render Props

### Use the button's children as label

```js
import { forwardRef } from 'react';
import { Button as KdsButton } from '@kickstartds/base/lib/button';

export const Button = forwardRef(({ children, ...props }, ref) => (
  <KdsButton {...props} ref={ref} renderLabel={() => children} />
);

// Usage
<Button variant="solid" size="medium">
  Click me
</Button>;
```

### Allow markdown in label

```js
import { forwardRef } from 'react';
import { Button as KdsButton } from '@kickstartds/base/lib/button';
import Markdown from 'markdown-to-jsx';

export const Button = forwardRef((props, ref) => (
  <KdsButton
    {...props}
    ref={ref}
    renderLabel={(label) => <Markdown children={label} />}
  />
));

// Usage
<Button variant="solid" size="medium" label="*Click* me" />;
```

## Replace with Context

```js
import { forwardRef } from 'react';
import {
  Button as KdsButton,
  ButtonContext,
  ButtonContextDefault,
} from '@kickstartds/base/lib/button';
import { ContentBox } from "@kickstartds/base/content-box";
import Markdown from 'markdown-to-jsx';

const Button = forwardRef((props, ref) => (
  <ButtonContextDefault
    {...props}
    ref={ref}
    renderLabel={(label) => <Markdown children={label} />}
  />
));

export const ButtonProvider = (props) => (
  <ButtonContext.Provider value={Button} {...props} />
);

// Usage
<ButtonProvider>
  <KdsButton variant="solid" size="medium" label="*Click* me" />
</ButtonProvider>

// Works also with buttons nested in other components
<ButtonProvider>
  <ContentBox
    image="/image.jpg"
    ratio="16:9"
    alignement="left"
    topic="Hey!"
    link={
      variant: "solid",
      size: "medium",
      label: "*Click* me" // <- !!
    }
  />
</ButtonProvider>
```

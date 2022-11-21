---
sidebar_position: 1
---

# Upgrade to 2.0.0

## Removed SASS `breakpoints` helper

### Usage of `breakpoints` helper for layouts

Remove the current `@use` from your SASS:

```scss
@use '@kickstartds/core/source/core/breakpoint';

.content {
  @include breakpoint.media('>xl') {
    --ks-spacing-xl: 8em;
  }
}
```

Replace it with a standard media query for this:
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

Like this:

```scss
@media (min-width: 75em) {
  .content {
    --ks-spacing-xl: 8em;
  }
}
```

Where `xl` in our case equates to `75em`. You can use the CSS Properties generated for you, to help still writing maintainable media queries.
For example:

```css
--ks-breakpoints: '{"phone":"36em","tablet":"48em","laptop":"62em","desktop":"75em"}';
```

### Usage of `breakpoints` helper for components

Remove the current `@use` from your SASS:

```scss
@use '@kickstartds/core/source/core/breakpoint';

.l-section {
  --section-dark--headline-color: var(--color-white);
  --section-dark--text-color: var(--color-grey-1);

  --section--background-light: var(--color-grey);

  &__container {
    --l-section_col--min-width: 16rem;

    .content & {
      --l-section_col--min-width: 10rem;

      @include breakpoint.media('>s') {
        --l-section_col--min-width: 9rem;
      }

      @include breakpoint.media('>l') {
        --l-section_col--min-width: 12rem;
      }
    }
  }
}
```

Replace it with:

```scss
@use '@kickstartds/core/source/core/container' with (
  $name: 'section-content'
);

.l-section {
  --section-dark--headline-color: var(--color-white);
  --section-dark--text-color: var(--color-grey-1);

  --section--background-light: var(--color-grey);

  &__container {
    --l-section_col--min-width: 16rem;

    .content & {
      --l-section_col--min-width: 10rem;

      @include container.size('≥', 640px) {
        --l-section_col--min-width: 9rem;
      }

      @include container.size('≥', 1024px) {
        --l-section_col--min-width: 12rem;
      }
    }
  }
}
```

Or:

Search:

```jsx
import { createContext, useContext } from 'react';
/* ... */
export const Consumption = (props) => {
  const Component = useContext(ConsumptionContext);
  return <Component {...props} />;
};
```

and:

```scss
@use '@kickstartds/core/source/core/breakpoint';
```

Replace:

```jsx
import { createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
/* ... */
export const Consumption = withContainer('consumption', ConsumptionContext);
```

and:

```scss
@use '@kickstartds/core/source/core/container' with (
  $name: 'consumption'
);
```

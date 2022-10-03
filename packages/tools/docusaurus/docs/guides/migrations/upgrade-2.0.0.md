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

<CH.Scrollycoding>

## Step 1

Lorem ipsum dolor sit amet, consectetur adipiscing something about points, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

> Nova in illis at dabat legi harundine non, ova miratur? _Quid in_ sole aer
> ad diffusa illis voluisti fidensque coniugiale laniata curam. Aras rivus
> eripuit, qua fistula haec partus; serpens, negat.

Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.

```js app.js focus=3:10
const { lorem, ipsum } = dolor({
  sit: {
    amet: 1,
    consectetur: 2,
    adipiscing: (elit) => ({
      sed: elit,
    }),
    eiusmod: (tempor) => ({
      incididunt: tempor,
    }),
    ut: (labore) => ({
      et: labore,
      dolore: labore + 1,
    }),
    magna: (aliqua) => ({
      ut: aliqua,
    }),
    nostrud: (elit) => ({
      exercitation: elit,
      ullamco: elit,
    }),
    laboris: (elit) => ({
      nisi: elit,
    }),
  },
});
```

---

## Step 2

Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in.

Praesent elementum facilisis leo vel fringilla est ullamcorper eget.

Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

Morbi quis commodo.

```js app.js focus=11:17

```

---

## Step 3

Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu.

- Nisi lacus sed viverra tellus in
- Nibh cras pulvinar mattis nunc sed
- Luctus accumsan tortor posuere ac

Ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

```js app.js focus=11:14
const { lorem, ipsum } = dolor({
  sit: {
    amet: 1,
    consectetur: 2,
    adipiscing: (elit) => ({
      sed: elit,
    }),
    eiusmod: (tempor) => ({
      incididunt: tempor,
    }),
    ut: (labore) => ({
      et: lorem(labore * ipsum),
      dolore: lorem(labore + 1),
    }),
    nostrud: (elit) => ({
      exercitation: elit,
      ullamco: elit,
    }),
    laboris: (elit) => ({
      nisi: elit,
    }),
  },
});
```

---

## Step 4

Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt.

Sed blandit libero volutpat sed cras.

- Nisi lacus sed viverra tellus in
- Nibh cras pulvinar mattis nunc sed

Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae.

```js app.js focus=15:21

```

---

## Step 5

Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in.

Praesent elementum facilisis leo vel fringilla est ullamcorper eget.

Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat.

Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra.

- Fringilla ut morbi tincidunt augue interdum velit euismod.
- Luctus accumsan tortor posuere ac ut consequat semper viverra.

Morbi quis commodo.

```js app.js

```

</CH.Scrollycoding>

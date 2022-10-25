---
sidebar_position: 7
---

# Breakpoints

Breakpoint tokens are only needed internally. They are used to generate scales of font sizes and spacing for different screen sizes.

Only one CSS custom property is created, which is read via JavaScript and used to [inform](../../components/anatomy.md/#event-handling) components about a breakpoint change.

<CH.Section>
<CH.Code>

```json breakpoints.json
{
  "ks": {
    "breakpoint": {
      "phone": {
        "value": "36em",
        "private": true
      },
      "tablet": {
        "value": "48em",
        "private": true
      },
      "laptop": {
        "value": "62em",
        "private": true
      },
      "desktop": {
        "value": "75em",
        "private": true
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-breakpoints: '{"phone":"36em","tablet":"48em","laptop":"62em","desktop":"75em"}';
}
```

</CH.Code>
</CH.Section>

CSS custom properties don't work in media query declarations. So if you write custom styles, you have to write the media query declaration manually.

TODO:

- prefer [container queries](../../components/anatomy.md/#container-queries)
- if scss, you can use [include-media](https://eduardoboucas.github.io/include-media/)

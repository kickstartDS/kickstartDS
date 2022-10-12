---
sidebar_position: 7
---

# Breakpoints

The token can be found in `breakpoints.json`.

| Token                     | Description                                  |
| ------------------------- | -------------------------------------------- |
| `--ks-breakpoint-phone`   | For screen sizes of current smartphones      |
| `--ks-breakpoint-tablet`  | For screen sizes of current tablets          |
| `--ks-breakpoint-laptop`  | For screen sizes of current laptops          |
| `--ks-breakpoint-desktop` | For screen sizes of current desktop displays |

The `private` value dictates wether a CSS property for the breakpoint is generated.

<CH.Section>
<CH.Code>

```json box-shadow.json
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

@media (min-width: 36em) {
  :root {
    /* Token for phone breakpoint */
  }
}
@media (min-width: 48em) {
  :root {
    /* Token for tablet breakpoint */
  }
}
@media (min-width: 62em) {
  :root {
    /* Token for laptop breakpoint */
  }
}
@media (min-width: 75em) {
  :root {
    /* Token for desktop breakpoint */
  }
}
```

</CH.Code>
</CH.Section>

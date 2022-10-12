---
sidebar_position: 6
---

# Depth

The token can be found in `depth.json`.

| Token              | Description                                         |
| ------------------ | --------------------------------------------------- |
| `--ks-depth-modal` | For modal elements that overlap the default content |

<CH.Section>
<CH.Code>

```json box-shadow.json
{
  "ks": {
    "depth": {
      "modal": {
        "value": "1000"
      }
    }
  }
}
```

```css tokens.css
:root {
  --ks-depth-modal: 1000;
}
```

</CH.Code>
</CH.Section>

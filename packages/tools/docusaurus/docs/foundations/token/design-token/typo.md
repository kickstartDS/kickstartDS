---
sidebar_position: 2
---

# Typography

Typography is one of the main ways you surface content in products. We care about good defaults to provide you a clear hierarchy and contrasting styles in your typography scale.  
The Token can be found in `typo.json`.

## Core Token

### Font Families

| Token                      | Preview                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| `--ks-font-family-display` | <div className="font-preview display">Almost before we knew it, we had left the ground.</div>   |
| `--ks-font-family-copy`    | <div className="font-preview copy">Almost before we knew it, we had left the ground.</div>      |
| `--ks-font-family-ui`      | <div className="font-preview interface">Almost before we knew it, we had left the ground.</div> |
| `--ks-font-family-mono`    | <div className="font-preview mono">Almost before we knew it, we had left the ground.</div>      |

```css token.css
:root {
  --ks-font-family-copy: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
}
```

### Font Size

| Token                     | Preview                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| `--ks-font-size-copy-xxs` | <div className="font-preview copy-xxs">Almost before we knew it, we had left the ground.</div> |
| `--ks-font-size-copy-xs`  | <div className="font-preview copy-xs">Almost before we knew it, we had left the ground.</div>  |
| `--ks-font-size-copy-s`   | <div className="font-preview copy-s">Almost before we knew it, we had left the ground.</div>   |
| `--ks-font-size-copy-m`   | <div className="font-preview copy-m">Almost before we knew it, we had left the ground.</div>   |
| `--ks-font-size-copy-l`   | <div className="font-preview copy-l">Almost before we knew it, we had left the ground.</div>   |
| `--ks-font-size-copy-xl`  | <div className="font-preview copy-xl">Almost before we knew it, we had left the ground.</div>  |
| `--ks-font-size-copy-xxl` | <div className="font-preview copy-xxl">Almost before we knew it, we had left the ground.</div> |

```css token.css
:root {
  --ks-font-size-copy-m: calc(
    var(--ks-font-size-copy-m-base) * var(--ks-font-size-copy-bp-factor, 1)
  );
}
```

### Line Height

| Token                            | Preview                                                                                                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--ks-font-line-height-copy-xxs` | <div className="font-preview line-height-copy-xxs">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-xxs"> dolor sit amet</div> |
| `--ks-font-line-height-copy-xs`  | <div className="font-preview line-height-copy-xs">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-xs"> dolor sit amet</div>   |
| `--ks-font-line-height-copy-s`   | <div className="font-preview line-height-copy-s">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-s"> dolor sit amet</div>     |
| `--ks-font-line-height-copy-m`   | <div className="font-preview line-height-copy-m">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-m"> dolor sit amet</div>     |
| `--ks-font-line-height-copy-l`   | <div className="font-preview line-height-copy-l">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-l"> dolor sit amet</div>     |
| `--ks-font-line-height-copy-xl`  | <div className="font-preview line-height-copy-xl">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-xl"> dolor sit amet</div>   |
| `--ks-font-line-height-copy-xxl` | <div className="font-preview line-height-copy-xxl">Almost before we knew it, we had left the ground.</div> <div className="font-preview line-height-copy-xxl"> dolor sit amet</div> |

```css token.css
:root {
  --ks-line-height-copy-m: 1.5;
}
```

## Semantic Token

### Font package

A combination of font-size, font-family and line-height.

| Token                 | Application    | Preview                                                                                              |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------- |
| `--ks-font-display-m` | Headlines      | <div className="font-preview font-display">Almost before we knew it, we had left the ground.</div>   |
| `--ks-font-copy-m`    | Copy Text      | <div className="font-preview font-copy">Almost before we knew it, we had left the ground.</div>      |
| `--ks-font-ui-m`      | User interface | <div className="font-preview font-interface">Almost before we knew it, we had left the ground.</div> |
| `--ks-font-mono-m`    | Code Snippets  | <div className="font-preview font-mono">Almost before we knew it, we had left the ground.</div>      |

```css token.css
:root {
  --ks-font-copy-m: var(--ks-font-size-copy-m) / var(--ks-line-height-copy-m) var(
      --ks-font-family-copy
    );
}
```

## Font Weight

| Token                        | Preview                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `--ks-font-weight-light`     | <div className="font-preview light">Almost before we knew it, we had left the ground.</div>     |
| `--ks-font-weight-regular`   | <div className="font-preview regular">Almost before we knew it, we had left the ground.</div>   |
| `--ks-font-weight-semi-bold` | <div className="font-preview semi-bold">Almost before we knew it, we had left the ground.</div> |
| `--ks-font-weight-bold`      | <div className="font-preview bold">Almost before we knew it, we had left the ground.</div>      |

```css token.css
:root {
  --ks-font-weight-regular: 400;
}
```

## Figma

See the following `Page` in our `Figma` tokens file for a visual representation:

<iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FH7F4P2fsDgEkIcc7U1alk1%2FkickstartDS-Design-Tokens%3Fnode-id%3D1%253A11" allowFullScreen></iframe>

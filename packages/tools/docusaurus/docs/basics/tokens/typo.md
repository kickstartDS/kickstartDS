---
sidebar_position: 3
---

# Typo

## Core Token

### Font Families

| Token                      | Preview                                                   |
| -------------------------- | --------------------------------------------------------- |
| `--ks-font-family-display` | <div className="font-preview display">Lorem Ipsum</div>   |
| `--ks-font-family-copy`    | <div className="font-preview copy">Lorem Ipsum</div>      |
| `--ks-font-family-ui`      | <div className="font-preview interface">Lorem Ipsum</div> |
| `--ks-font-family-mono`    | <div className="font-preview mono">Lorem Ipsum</div>      |

```css title="token.css"
:root {
  --ks-font-family-copy: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
}
```

### Font Size

| Token                     | Preview                                                  |
| ------------------------- | -------------------------------------------------------- |
| `--ks-font-size-copy-xxs` | <div className="font-preview copy-xxs">Lorem Ipsum</div> |
| `--ks-font-size-copy-xs`  | <div className="font-preview copy-xs">Lorem Ipsum</div>  |
| `--ks-font-size-copy-s`   | <div className="font-preview copy-s">Lorem Ipsum</div>   |
| `--ks-font-size-copy-m`   | <div className="font-preview copy-m">Lorem Ipsum</div>   |
| `--ks-font-size-copy-l`   | <div className="font-preview copy-l">Lorem Ipsum</div>   |
| `--ks-font-size-copy-xl`  | <div className="font-preview copy-xl">Lorem Ipsum</div>  |
| `--ks-font-size-copy-xxl` | <div className="font-preview copy-xxl">Lorem Ipsum</div> |

```css title="token.css"
:root {
  --ks-font-size-copy-m: calc(
    var(--ks-font-size-copy-m-base) * var(--ks-font-size-copy-bp-factor, 1)
  );
}
```

### Line Height

| Token                            | Preview                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--ks-font-line-height-copy-xxs` | <div className="font-preview line-height-copy-xxs">Lorem ipsum</div> <div className="font-preview line-height-copy-xxs"> dolor sit amet</div> |
| `--ks-font-line-height-copy-xs`  | <div className="font-preview line-height-copy-xs">Lorem ipsum</div> <div className="font-preview line-height-copy-xs"> dolor sit amet</div>   |
| `--ks-font-line-height-copy-s`   | <div className="font-preview line-height-copy-s">Lorem ipsum</div> <div className="font-preview line-height-copy-s"> dolor sit amet</div>     |
| `--ks-font-line-height-copy-m`   | <div className="font-preview line-height-copy-m">Lorem ipsum</div> <div className="font-preview line-height-copy-m"> dolor sit amet</div>     |
| `--ks-font-line-height-copy-l`   | <div className="font-preview line-height-copy-l">Lorem ipsum</div> <div className="font-preview line-height-copy-l"> dolor sit amet</div>     |
| `--ks-font-line-height-copy-xl`  | <div className="font-preview line-height-copy-xl">Lorem ipsum</div> <div className="font-preview line-height-copy-xl"> dolor sit amet</div>   |
| `--ks-font-line-height-copy-xxl` | <div className="font-preview line-height-copy-xxl">Lorem ipsum</div> <div className="font-preview line-height-copy-xxl"> dolor sit amet</div> |

```css title="token.css"
:root {
  --ks-line-height-copy-m: 1.5;
}
```

## Semantic token

### Font package

The combination of font-size, font-family and line-height.

| Token                 | Application    | Preview                                                        |
| --------------------- | -------------- | -------------------------------------------------------------- |
| `--ks-font-display-m` | Headlines      | <div className="font-preview font-display">Lorem Ipsum</div>   |
| `--ks-font-copy-m`    | Copy Text      | <div className="font-preview font-copy">Lorem Ipsum</div>      |
| `--ks-font-ui-m`      | User interface | <div className="font-preview font-interface">Lorem Ipsum</div> |
| `--ks-font-mono-m`    | Code Snippets  | <div className="font-preview font-mono">Lorem Ipsum</div>      |

```css title="token.css"
:root {
  --ks-font-copy-m: var(--ks-font-size-copy-m) / var(--ks-line-height-copy-m) var(
      --ks-font-family-copy
    );
}
```

## Font Weight

| Token                        | Preview                                                   |
| ---------------------------- | --------------------------------------------------------- |
| `--ks-font-weight-light`     | <div className="font-preview light">Lorem Ipsum</div>     |
| `--ks-font-weight-regular`   | <div className="font-preview regular">Lorem Ipsum</div>   |
| `--ks-font-weight-semi-bold` | <div className="font-preview semi-bold">Lorem Ipsum</div> |
| `--ks-font-weight-bold`      | <div className="font-preview bold">Lorem Ipsum</div>      |

```css title="token.css"
:root {
  --ks-font-weight-regular: 400;
}
```

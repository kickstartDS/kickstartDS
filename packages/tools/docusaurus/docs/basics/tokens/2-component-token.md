---
sidebar_position: 1
---

# Component Token

Component Token are an exhaustive representation of every value associated with a specific component. They by default inherit from [design Token](/docs/basics/token/design-token). Whenever possible, we recommend to keep pointing these to the foundational Token, rather than change into hard values such as hex codes. Nevertheless you can use these to fully match a component's appearance to a given design layout or specification.

## Example

To illustrate what to achieve with component Token we takt a classic example: **the button** 😁

```json title="token-primitives.json"
  _TODO_
  --c-button--background-color: rgb(var(--c-button--color-primary-r),var(--c-button--color-primary-g),var(--c-button--color-primary-b));
```

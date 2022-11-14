---
sidebar_position: 2
---

# Rich Text Rendering

By default, the kickstartDS `RichText` component accepts [markdown](https://daringfireball.net/projects/markdown/) as input. There are many cases where data other than markdown needs to be processed, e.g. if you're working with a CMS.

## Sanity

Sanity uses [Portable Text](https://www.sanity.io/guides/introduction-to-portable-text) to store rich text content. To make it work with the kickstartDS `RichText` component, we can use the `RichText`s `renderText` render function to convert Sanity Portable Text data to react components.

```jsx
import { forwardRef } from "react";
import { createProvider } from "@kickstartds/core/lib/utils";
import BlockContent from "@sanity/block-content-to-react";
import {
  RichTextContext,
  RichTextContextDefault,
} from "@kickstartds/base/lib/rich-text";

const renderPortableText = (text) => <BlockContent blocks={text} />;

const PortableRichText = forwardRef((props, ref) => (
  <RichTextContextDefault renderText={renderPortableText} ref={ref} {...props}>
));

export default createProvider(RichTextContext, PortableRichText);
```

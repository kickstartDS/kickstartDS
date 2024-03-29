---
sidebar_position: 1
---

# Anatomy

## Component driven development

We strongly follow component driven development:<br/>
https://www.componentdriven.org/

## Overview of layers

<img src={require('./assets/component_slices.png').default} alt="Infographic representing a sliced core listing the different layers" />

Different layers:

- Branding Token
- Design Token
- Component Token
- (S)CSS
- JavaScript
- HTML / Markup
- React & TypeScript
- JSON Schema

### Branding Token

**Branding Token** are the most basic, and high-level, elements influencing a component. As they were used to initialize your **Design Token**, they will also be mapped into your **Component Token** and thus influence how your component will look.

### Design Token

Generated by **Branding Token** these act as inputs, to be converted and used in your **Component Token** to break down Design System rules into component rules to re-use.

### Component Token

**Component Token** map your **Design Token** set and your semantic token to your components in layers. Variants and variations are layered on base variants, allowing for easy customization while always having great defaults as a baseline.

### (S)CSS

Component styles are written in [SCSS](https://sass-lang.com/) and named following the [BEM](https://en.bem.info/methodology/quick-start/) methodology.

To prevent class name collision, kickstartDS component class names are prefixed with `c` for content components or `l` for layout components.

#### Container Queries

All components are fully responsive. Because we don't know where they will be used, we don't use media queries, but [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries).

For browsers that do not yet natively support container queries, we provide a narrow polyfill.

### JavaScript

Most components are pure and do not require additional JavaScript in the client.  
For interactive components, a JavaScript module is loaded separately. This module is written in vanilla JavaScript and works with any frontend framework and even without a framework.

#### Initialization

kickstartDS uses [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to initialize components when they appear on the page.

A component script is a JavaScript class with the static property `identifier`. A component with the HTML attribute `ks-component="{identifier}"` is then initialized with the appropriate class.

#### Lazy loading

Component scripts are loaded only when the component is on the page or dynamically added.  
You can go further and load the script only when the component scrolls into the viewport by simply adding the `lazyload` class to the component.

#### Event-Handling

Components can communicate with each other via a [PubSub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) event bus.
Anyone can participate in the event bus; it is publicly available at `window._ks.radio` and can therefore also be used to communicate with the "outside world" or to send events from outside into components.

### HTML / Markup

Markup is the normalizing factor, it's what ultimately defines what a component looks like in the browser. We use **React** as a templating language to write templates, but they generate **HTML** in the end... and as our **JavaScript** / **TypeScript** is written outside of **React**, you can easily use **kickstartDS** in **HTML**, or by adding it into your legacy backend / code-base (for example **PHP**, **.NET**, etc).

You could also re-implement components in another templating layer like Vue.js or Angular, as long as the resulting **HTML** stays the same, and the [component API](./component-api.md) is followed.

### React & TypeScript

Although **kickstartDS** components are basically framework agnostic, each component is also shipped as a fully typed and ready to use **React** component.

### JSON Schema

A component can have multiple options that affect its appearance. These options (or props) are defined in [JSON Schema](https://json-schema.org/) and form the [component API](./component-api.md).

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://schema.kickstartds.com/base/divider.schema.json",
  "title": "Divider",
  "description": "Dividers bring clarity to a layout by grouping and dividing content in close proximity.",
  "type": "object",
  "properties": {
    "variant": {
      "title": "Style of the divider",
      "type": "string",
      "description": "Choose a variant for the divider",
      "enum": ["default", "accent"],
      "default": "default"
    }
  }
}
```

JSON Schema is a common and widely used format to describe (and validate) data structures and can be easily converted to other formats (such as [TypeScript types](https://github.com/bcherny/json-schema-to-typescript#readme), Storybook stories or [Sanity schemas](https://www.sanity.io/docs/schema-types)). kickstartDS uses the component schemas e.g. for generating the React prop types.

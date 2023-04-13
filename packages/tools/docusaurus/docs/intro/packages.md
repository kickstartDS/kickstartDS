---
sidebar_position: 5
---

import { Section } from '@kickstartds/base/lib/section';
import { TeaserBox } from '@kickstartds/base/lib/teaser-box';
import { Columns } from '@bedrock-layout/primitives';
import { Storytelling } from '@kickstartds/content/lib/storytelling';
import myImageUrl from '../../static/img/content-module.png';

# Packages

Packages in programming are commonly used to divide up code into distinctly (re-)usable blocks of functionality. (Almost) every programming language has its own version of handling packages, package dependencies and package installation. As we're using Node and **JavaScript** / **TypeScript** as our programming language of choice, our package registry will be **npm**. To read more about this topic, have a look at the ["Environment"](./environment.md) chapter of this section.

On this page, we'll try to give an overview to all the packages we've created in the context of working with Design Systems and **kickstartDS**.

## Overview

**kickstartDS** is split into a bunch of different packages. This way you can pick and choose which parts you actually want to use in your own setup. Not every package will be used directly, as there are existing dependencies between those packages, too. For example adding `@kickstartds/base` to your project will automatically also add `@kickstartds/core` in an up-to-date and compatible version.

Packages get published on `npm`, you can see a full list here:<br/>
https://www.npmjs.com/org/kickstartds

We typically use different channels for different stabilities:

- `latest` is connected to the `master` branch on our mono-repository, always contains the latest stable release
- `next` is connected to the `next` branch on our mono-repository, always contains the next feature release that's in preparation
- `beta` is connected to the `beta` branch on our mono-repository, always contains the next breaking release that's in preparation
- `canary` is connected to all branches that have an active PR open on Github, and generates a Canary release specific to that branch, [for isolated, early testing](https://martinfowler.com/bliki/CanaryRelease.html)

This also aligns with our semantic versioning scheme. Breaking changes (`X.0.0`) mature through the `beta` channel before being merged to `latest`, feature releases (`1.X.0`) go through `next` and fixes (`1.0.X`) land on `latest` directly. As every change introduced to these channels will have gone through a PR on Github, it will also have included a Canary release for it. All branches [auto release based on merged PRs](./upgrading.md#semantic-versioning-with-auto)

All releases get published on **Github**, too. So you can also use that as a reference:<br/>
https://github.com/kickstartDS/kickstartDS/releases

To learn more about **Auto**, **Semantic Versioning** and release handling you can read some background information on the "Upgrading" page, [in the following section](./upgrading.md#some-background-information).

We've categorized all the packages existing (right now) below, so feel free to have a closer look!

## Component modules

Those are packages containing components to use as building blocks when creating your Design System. Every module is dependent on `@kickstartds/core`, for its shared core functionality. And all modules except `@kickstartds/content` are freely available to install right away. If you want to use our content module, have a look at the section about it below.

We try to slice modules by the use cases its components enable, or the type of interface built using them.

### **Core** module

`@kickstartds/core` contains shared functionality, that get's consumed by other component modules implementing components. Every other component module will have `@kickstartds/core` as a dependency. Some of the things included:

- Generally shared helper components (like `Container` to build up container query based components)
- Shared Client-side utilities / functionality (like `_ks.radio` for event-based communication between components)
- Base **Storybook** stories for **Design Token** (for those base token are the same in every Design System based on **kickstartDS**)
- Helpers used to enrich components in **Storybook** (like automatically generating all the **Controls** for you)
- Utilities to help constructing **React** templates (like `createProvider` for easy creation of **kickstartDS** component `Provider`s)

You can find this package on:

| Category                         | Link                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/core                                              |
| Our **Github** mono-repository   | https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/core              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS/blob/master/packages/components/core/CHANGELOG.md |

### **Base** module

`@kickstartds/base` has all the obvious, and mostly simple, components. Those are like the smallest lego bricks in your collection... you use them to build up to bigger ones.

Some components included here, to get a feeling:

- `Button` for everything that should look like a button ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/base-button--solid))
- `Headline` for expressive and flexible headlines ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/base-headline--h-1))
- `TextMedia` to arrange text and images / videos ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/base-text-media--image-above))
- `ContentBox` for more condensed inline content ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/base-content-box--image))
- `TeaserBox` to tease something that's linked ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/base-teaser-box--linked-without-button))
- `Section` to organize components into pages ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/base-section--content-boxes))

For a complete list of components have a look at the following folder:<br/>
https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/base/source

Or have a look through the **BASE** category (part of the left sidebar) in our **Storybook**:<br/>
https://www.kickstartds.com/storybook/

You can find this package on:

| Category                         | Link                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/base                                              |
| Our **Github** mono-repository   | https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/base              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS/blob/master/packages/components/base/CHANGELOG.md |

### **Content** module

`@kickstartds/content` has bigger, more feature-rich components used to build expressive and rich marketing- and landing-page type websites and interfaces. It's also our first commercial component module, meaning it's not available to install freely. You have to get access to it on **Github** and **npm** through acquiring a usage license from us.

We think this module is a nice addition when building your Design System, but it's in no way a necessity. By offering this as a paid module, we enable further development of **kickstartDS**... while also delivering great value in the components offered. We're pretty sure you're always coming out ahead when choosing between using our content module and building similar components yourself!

<Section
  ks-theme="docs"
  spaceBefore="none"
  spaceAfter="none"
  width="full"
  inverted="true"
  mode="list"
>
  <Storytelling
    backgroundImage={myImageUrl}
    box={{
      hAlign: 'left',
      headline: {
        align: null,
        content: 'kickstartDS Content Module',
        level: 'h2',
        spaceAfter: 'none',
        styleAs: 'h1',
        subheadline: 'The perfect addition to our Open Source base',
      },
      link: {
        fillAnimation: false,
        href: '#',
        iconAfter: false,
        iconAnimation: false,
        iconBefore: false,
        label: 'Interested? Contact us!',
        newTab: false,
        size: 'small',
        variant: 'solid',
      },
      text: 'The **Content Module** includes seven rich components: Hero visual, Quote, Storytelling etc. — everything you need to build beautiful content experiences or to enrich your existing Design System',
      textAlign: 'left',
      vAlign: 'center',
    }}
  />
</Section>

<br/><br/>

Components included with our paid module:

- `CountUp` to display a flexible amount of number counting elements ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/content-count-up--components))
- `LogoTiles` to show a variable amount of logos in a grid-like way ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/content-logos--four-row))
- `Quote` for flexible and rich versions of quotes ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/content-quote--image))
- `Storytelling` for ultimate flexibility for image and text combinations ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/content-storytelling--image))
- `Visual` for big, visual teasers involving one prominent image or video ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/content-visual--box-light))

For a complete list of components have a look at the following folder (access needed):<br/>
https://github.com/kickstartDS/content/tree/master/source

Or have a look through the **CONTENT** category (part of the left sidebar) in our **Storybook**:<br/>
https://www.kickstartds.com/storybook/

You can find this package on (access provided):

| Category                         | Link                                                            |
| -------------------------------- | --------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/content              |
| Its own **Github** repository    | https://github.com/kickstartDS/content/tree/master              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/content/blob/master/CHANGELOG.md |

### **Form** module

`@kickstartds/form` contains all the basic form elements typically used in web interfaces. It doesn't include validation or form behaviour, but is concerned with styling form elements according to your brand / Design Token set.

Components included here:

- `Checkbox` for single checkboxes ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-checkbox--default))
- `CheckboxGroup` for grouped checkboxes ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-checkbox-group--default))
- `RadioButton` for single radio buttons ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-radio-button--default))
- `RadioGroup` for grouped radio buttons ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-radio-group--default))
- `SelectField` for select fields ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-select-field--default))
- `TextArea` for text area fields ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-text-area--default))
- `TextField` for text input fields ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/@kickstartds/form_form-text-field--default))

For a complete list of components have a look at the following folder:<br/>
https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/form/source

Or have a look through the **FORM** category (part of the left sidebar) in our **Storybook**:<br/>
https://www.kickstartds.com/storybook/

You can find this package on:

| Category                         | Link                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/form                                              |
| Our **Github** mono-repository   | https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/form              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS/blob/master/packages/components/form/CHANGELOG.md |

### **Blog** module

`@kickstartds/blog` contains all the components needed to build a nice looking blog, compatible with your Design System. You can have a look at our **kickstartDS** blog for an example of the components in action: https://www.kickstartds.com/blog/

Included components:

- `PostAside` to tease author, blog meta data and sharing options ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/blog-post-aside--default))
- `PostHead` as ahead element for an entry, including tags, headline and cover image ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/blog-post-head--default))
- `PostMeta` to show blog meta data, used by `PostAside` ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/blog-post-meta--default))
- `PostShareBar` for sharing an entry, also used by `PostAside` ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/blog-post-share-bar--default))
- `PostTeaser` to tease a blog entry ([Storybook](https://www.kickstartds.com/storybook/?path=/docs/blog-post-teaser--default))

For a complete list of components have a look at the following folder:<br/>
https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/blog/source

Or have a look through the **BLOG** category (part of the left sidebar) in our **Storybook**:<br/>
https://www.kickstartds.com/storybook/

You can find this package on:

| Category                         | Link                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/blog                                              |
| Our **Github** mono-repository   | https://github.com/kickstartDS/kickstartDS/tree/master/packages/components/blog              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS/blob/master/packages/components/blog/CHANGELOG.md |

## Tooling packages

There are some packages used internally (`@kickstartds/bundler`) by **kickstartDS**, while others are also meant to be consumed in your own project to enable specific integrations in an easy way (like having a **kickstartDS** compatible **Style Dictionary** config ready to use in `@kickstartds/style-dictionary`) or helping in every day tasks (like `kickstartds`).

### **kickstartDS** CLI

`kickstartds` holds our CLI, and is the only package not published under the `@kickstartDS` org namespace, living directly at `kickstartds` instead. It's used to initialize and compile Design Token sets, generate **TypeScript** types for components and dereferenced **JSON Schema** files for you. To learn more about it, have a look at our ["CLI Usage"](./cli.md) page.

You can find the CLI on:

| Category                         | Link                                                                  |
| -------------------------------- | --------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/kickstartds                             |
| Its own **Github** repository    | https://github.com/kickstartDS/kickstartDS-cli                        |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS-cli/blob/main/CHANGELOG.md |

### **kickstartDS** Bundler

`@kickstartds/bundler` contains the bundler we use internally when releasing ready-to-consume packages on **npm**.

This includes (non-exhaustive):

- Generating **JSON Schemas** ready for consumption
- Generating **TypeScript** types for auto-completion
- Transpiling code to be browser-compatible
- Generating **CSS** bundles from **SCSS**

If you're wondering how you'd do that in your own Design System, have a look at the final step of our main guide ["Create your Design System"](../guides/create/index.mdx). We describe one way to do it there, but this setup will always heavily depend on your specific set of circumstances... and the projects that you plan on using your Design System in.

You can find the bundler on:

| Category                         | Link                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/bundler                                         |
| Our **Github** mono-repository   | https://github.com/kickstartDS/kickstartDS/tree/master/packages/tools/bundler              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS/blob/master/packages/tools/bundler/CHANGELOG.md |

### **Style Dictionary** integration

`@kickstartds/style-dictionary` provides a directly re-usable **Style Dictionary** configuration. Either consume a completely **kickstartDS**-compatible base config from this, or build up your own config using **kickstartDS** building blocks (like filters, formats, parsers and templates).

**Style Dictionary** is used as a tool to manage your **Design Token** set. All your atomic design decisions get encoded in standardized JSON, ready to be transformed to all the outputs you might need. For **kickstartDS** this currently means converting your [Design Token](../foundations/token/design-token/index.md) set to component-compatible CSS Custom Properties (CSS variables). Those, in turn, are used inside components by defining [Component Token](../foundations/token/component-token.mdx). But it could also mean exporting them in a format compatible with **iOS**, **Android** development, or to generate brand-compliant theming inputs for **Material UI** / **MUI**, **Bootstrap** or **SAP Fiori**.

To learn more about **Style Dictionary** in general, [visit their website](https://amzn.github.io/style-dictionary/).

You can find our **Style Dictionary** utilities on:

| Category                         | Link                                                                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/style-dictionary                                         |
| Our **Github** mono-repository   | https://github.com/kickstartDS/kickstartDS/tree/master/packages/tools/style-dictionary              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS/blob/master/packages/tools/style-dictionary/CHANGELOG.md |

## **Storybook** addons

**Storybook** earns its own category here, because using **Storybook** as your Design Systems workbench is one of the core choices we made when creating **kickstartDS**. This is also implied when using **kickstartDS** for yourself, as our approach to development utilizies, and profits from, **Storybooks** immensely. Case in point: we've written some addons for **Storybook** to bridge the gap between **kickstartDS**-specific implementation choices (like using **JSON Schema** or **Component Token**) and your general, known usage of **Storybook** to test and develop components.

We still try to write those addons in a way that they're useful outside of **kickstartDS**, too. But they're especially useful when combined!

### **JSON Schema** addon

`@kickstartds/storybook-addon-jsonschema` is an addon we wrote to display **JSON Schema** documentation for your [component API](../foundations/components/component-api.md), including a validating JSON Code Editor with semantic auto-complete, the ability to interact with your components, and copy configurations with ease.

To learn more about this addon, view our [dedicated integrations page about it](../integration/storybook/schema.mdx).

You can find this addon on:

| Category                         | Link                                                                             |
| -------------------------------- | -------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/storybook-addon-jsonschema            |
| Its own **Github** repository    | https://github.com/kickstartDS/storybook-addon-jsonschema                        |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/storybook-addon-jsonschema/blob/main/CHANGELOG.md |

### **Component Token** addon

`@kickstartds/storybook-addon-component-tokens` is an addon we wrote to display **Component Token** directly alongside your component in **Storybook**. This enables you to inspect token assignment or layering, you can even experiment by changing tokens around and testing the result by browsing through the rest of your **Storybook** (changes to your tokens made this way are persisted for your browser session).

To learn more about this addon, view our [dedicated integrations page about it](../integration/storybook/token.mdx#component-token-integration).

You can find this addon on:

| Category                         | Link                                                                                   |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/storybook-addon-component-tokens            |
| Its own **Github** repository    | https://github.com/kickstartDS/storybook-addon-component-tokens                        |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/storybook-addon-component-tokens/blob/main/CHANGELOG.md |

## Configuration packages

All the packages listed here include ready-to-use configuration for coding best practices, and tools related to that (e.g. linting with [**ESLint**](https://eslint.org/) or [**Stylelint**](https://stylelint.io/)). Those are the configurations we use when developing **kickstartDS** itself, but it can make a lot of sense of just using them for your own Design System, too. Especially if you don't need anything super special, or don't feel like implementing it yourself.

### **Auto** configuration

`@kickstartds/auto-config` contains a configuration for **Auto**, a tool to generate releases based on semantic version labels on pull requests. Learn more on [their Github](https://github.com/intuit/auto) or [dedicated website for the tool](https://intuit.github.io/auto/). We use this ourselves, to generate releases for all of our **npm** packages. Have a look at part 5 of ["Create your Design System"](../guides/create/publish.mdx) for a deeper look on how this can work for your own Design System.

You can find this config on:

| Category                         | Link                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/auto-config                       |
| Our **Github** mono-repository   | https://github.com/kickstartDS/config/tree/master/packages/auto              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/config/blob/master/packages/auto/CHANGELOG.md |

### **ESLint** configuration

`@kickstartds/eslint-config` contains the **ESLint** config we use when developing code. It enables consistent code formatting for **JavaScript** / **TypeScript**, and in the process reduces diffs when changing code. It also recommends best practices, and helps avoid using bad code patterns. We use [`airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [`prettier`](https://github.com/prettier/eslint-config-prettier) as a baseline, with some slight mutations for our own use.

You can easily re-use this for your own Design System! Learn more about **ESLint** [on their dedicated website](https://eslint.org/).

You can find this config on:

| Category                         | Link                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------ |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/eslint-config                       |
| Our **Github** mono-repository   | https://github.com/kickstartDS/config/tree/master/packages/eslint              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/config/blob/master/packages/eslint/CHANGELOG.md |

### **Stylelint** configuration

`@kickstartds/stylelint-config` holds the **Stylelint** config we use for our **CSS** and **SCSS** authoring. It does pretty much the same for **CSS** as **ESLint** does for your **JavaScript** / **TypeScript**. Like with `@kickstartds/eslint-config` we haven't reinvented the wheel here. We're basing off of [`standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss), [`sass-guidelines`](https://github.com/bjankord/stylelint-config-sass-guidelines) and [`prettier`](https://github.com/prettier/stylelint-config-prettier).

As with `@kickstartds/eslint-config`, you can easily re-use this for your own Design System! Learn more about **Stylelint** [on their dedicated website](https://stylelint.io/).

You can find this config on:

| Category                         | Link                                                                              |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/stylelint-config                       |
| Our **Github** mono-repository   | https://github.com/kickstartDS/config/tree/master/packages/stylelint              |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/config/blob/master/packages/stylelint/CHANGELOG.md |

## **kickstartDS** packages

The following packages are used for our own purposes. For example to create our main marketing page, our documentation, our branded **Storybook**, and so on. These can be interesting to see how we've used **kickstartDS** ourselves. This currently (in a published form) includes the repository containing our own **Storybook** instance / Design System.

### **kickstartDS** Design System

`@kickstartds/design-system` is our Design System, and includes all of our **kickstartDS** branded component versions. This can be a great place to find inspiration, as we've used the concepts described throughout this documentation ourselves, to build up our own website.

You can find it here:

| Category                         | Link                                                                          |
| -------------------------------- | ----------------------------------------------------------------------------- |
| Hosted **Storybook**             | https://www.kickstartds.com/storybook/                                        |
| **npm** package registry         | https://www.npmjs.com/package/@kickstartds/design-system                      |
| Its own **Github** repository    | https://github.com/kickstartDS/kickstartDS-storybook                          |
| `CHANGELOG.md` with all releases | https://github.com/kickstartDS/kickstartDS-storybook/blob/master/CHANGELOG.md |

## Misc packages

This leaves us with some packages that can't quite fit the categories above. Currently this is only `@kickstartds/json-schema-viewer`, which gets utilized by our **JSON Schema** addon (`storybook-addon-jsonschema`).

### **JSON Schema** viewer

`@kickstartds/json-schema-viewer` is a fork of [`atlassian/json-schema-viewer`](https://github.com/atlassian-labs/json-schema-viewer). We forked that project to update the bundling to enable compiling it for the browser, and export some components more directly for consumption. It's used inside `@kickstartds/storybook-addon-jsonschema`, see its section above for more details.

You can find this fork on:

| Category                      | Link                                                          |
| ----------------------------- | ------------------------------------------------------------- |
| **npm** package registry      | https://www.npmjs.com/package/@kickstartds/json-schema-viewer |
| Its own **Github** repository | https://github.com/kickstartDS/json-schema-viewer             |

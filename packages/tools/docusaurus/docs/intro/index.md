---
sidebar_position: 1
sidebar_label: Overview
---

import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

# Introduction to kickstartDS

**kickstartDS** is an open source Design System starter and UI toolkit for building up your very own Design System. This in turn enables you, and your team, to build brand-compliant websites and apps super efficiently. All while using core web technologies — HTML, CSS, and JavaScript — and best practices.

_TODO_: Add expressive visualization of **what** kickstartDS is

Get started building your own Design System by installing **kickstartDS** into your project, or by following our [Create your first Design System](https://todo) tutorial, to learn about the main concepts involved.

<Section ks-theme="docs" spaceBefore="none" spaceAfter="none" width="full">
  <TeaserBox
    link={{
      size: 'small',
      href: '/blog/',
      label: "Getting started",
      variant: "outline",
    }}
    text="Configure your environment, and add **kickstartDS** into your project"
    topic="Installation"
  />
  <TeaserBox
    link={{
      size: 'small',
      href: '/blog/',
      label: "Make it yours",
      variant: "outline",
    }}
    text="Learn about token generation, brand application and customization options"
    topic="Design application"
  />
  <TeaserBox
    link={{
      size: 'small',
      href: '/blog/',
      label: "Concepts",
      variant: "outline",
    }}
    text="Take a look behind the scenes, and learn about the conceps and ideas making up **kickstartDS**"
    topic="How It Works"
  />
</Section>

## Overview

**kickstartDS** focuses on the consistent frontend UX and UI interaction of components — colors, layout, interactions, animations. It's easy to adapt, and integrates with every frontend-approach that works with regular HTML.

Additionally, under the hood, React is used as the templating layer of choice (TODO: read more about why, and what this means here), but integration into your templating layer, or backend, of choice is in no way limited by this, as everything is written to be usable without a React runtime! Only development of new components involves, and benefits by, the use of React!

### Framework-agnostic

Every kickstartDS component consists of semantic HTML(5), CSS Modules & Properties and JavaScript (ES6). This makes it easy to implement across any framework or even stand alone.

Alternatively, use our ready-to-use React components directly in your codebase!

### Quality UX

A quality UX is defined not only by relevant content and services, it is also a matter of a clear and consistent brand image, with intuitive and usable interaction patterns and features.

Use our experience to your advantage!

### Performance

Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework are as lightweight as you need it to be.

Stop thinking about build tooling and bundling!

### Accessibility

**kickstartDS** provides support for W3C’s [WCAG 2.1 spec](https://www.w3.org/TR/WCAG21/). We take care that components support touch and keyboard navigation, screen readers and more.

And if needed, we can give you pointers for your content!

## Goals

### Great components as the baseline

Make the most out of your frontend interfaces by unifying their core – utilizing component and design Token, component APIs and props and a shared core as a baseline to unlock effiency when implementing new applications of your Design System.

**kickstartDS** aims to be the foundation for your Design System, built with reusable components and tools itself, guided by clear standards, that can be adopted and assembled together, to create your products: fast, flexible, responsive, accessible and best of all: you can plug it onto every digital touch point you own!

### Enable flexible + easy design application

Establish one common ground for developers and designers to deliver on your marketing, branding and design requirements.

**kickstartDS** should help developers and designers in independently delivering a consistent UX and engaging user interfaces.

With **kickstartDS** teams should be able to design, build, and organize UI components better and faster. Using Storybook you make sure every element aligns with all the responsive scenarios your users may encounter, and components are developed independently!

### Work with "classic" backend environments

Provide tooling to support your integration tasks, by improving developer DX drastically. Working with a more "classic" approach shouldn't mean you'd have to lack tooling to support your daily work.

Because not every potential touchpoint can be run headless, and integration of HTML markup into backend templates still plays a very important role today. Be it your Rails-driven eCommerce site, a blog you run for your marketing department, or a fully custom backend-rendering based approach.

Changelogs with automatic markup change detection and documentation, copy-pasteable & configurable HTML-Snippets through Storybook, and optimized JavaScript and CSS bundles lighten your load!

### Jamstack & composable integrations

Starting with a strong common ground in your Design System you should be able to integrate fitting solutions as you go.
This gets especially easy when opting for React as the central building block of your tech stack.

With **kickstartDS** components at their core already being pure, functional React components, composability should be encouraged on all levels. With a multitude of existing integrations, common tasks can be reduced to just adding the correct one to the mix!

Additionally an added, optional layer of React concepts should support those use cases:

- React Provider / Context
- React Render Props

Working on a marketing- or landing-page, or a blog?
Get the page builder experience with Netlify CMS, Sanity, Tina CMS or Wordpress in combination with the official kickstartDS Gatsby theme.

Building a Next.js page or application?
Use our auto-generated GraphQL APIs (based on your component API), including full documentation! Everything is SSR- and ESM-compatible, too, which means you shouldn't have to worry about performance yourself!

## kickstartDS CLI

The **kickstartDS** CLI, or Command Line Interface, is a tool to quickly scaffold **kickstartDS** components, generate and convert Design Token and provides a number of helpful commands to **kickstartDS** developers. In addition to installing and updating **kickstartDS** versions, you can generate your initial, expansive & semantic Token set from a reduced, branding-orientend JSON input, or convert your Style Dictionary-based Token set into different output formats... for example the CSS Properties used and referenced in component Token.

[Learn more](cli/index.md) about our CLI.

## Figma

We currently support integrating with Figma through our official Design Token library:

<iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FH7F4P2fsDgEkIcc7U1alk1%2FkickstartDS-Design-token%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

The template includes all our Token categories (colors, spacings, typography, borders, durations, opacities and shadows), and for all of those Token categories there are pre-defined base scales and semantic Token based on those base scales. All ready to use, but customizable by just re-defining relationships.

You can just copy that file and enter your own Design Token (as defined in your Style Dictionary) to have a Figma file to hand around to your designers, enabling them to use the same, semantic structure underlying your real components and interfaces. It also serves as a great illustration of your Design Token.

Learn more about our [token structure](../basics/token/index.md), and how to leverage it for yourself.

We're currently working on an automatic sync option native to **kickstartDS**, which should work in both directions (Figma -> Style Dictionary, Style Dictionary -> Figma) and thus enable true synchronization in shared workflows.

In the meantime you can add solutions like [Specify](https://specifyapp.com/) to the mix, to enable at least one way sync from Figma to your Style Dictionary. We've built a preliminary pilot for this, so if you're interested in that... just hit us up!

Further we're currently exploring generation of Figma UI Kits based on your single point of truth - your coded components. One such approach involves using [story.to.design](https://story.to.design/), which looks to be becoming quite dependable for automatic conversion!

## Ecosystem

No modern technical solutions exists in a vacuum, at least it really shouldn't. Having a lively ecosystem enables broader and quicker adoption, while sharing knowledge and common learnings with a wider, organic community.

This is why we're also always actively trying to add building blocks to that ecosystem ourselves, while listening closely to which problems people are actually trying to solve.

### Tooling

While having a solid Design System can be described as the necessary start, without projects using it, this is theoretical value. This is why **kickstartDS** comes with ready-to-use integrations and adapters for a lot of common scenarios you might encounter while thinking about a project - like your main marketing site, your blog or the way you want to integrate design decisions into an automated process.

#### Generator

Your Design System already has a really good knowledge about what a component is, how it is structured and how it behaves. We use that knowledge to provide a Gatsby theme, that already includes everything a website needs (for SEO, performance, etc). We even already have transformers for that theme for WordPress, Netlify CMS, Contentful, MDX. And if you're using Next.js we have some plugins to use your components in a performant way there too, without writing glue code yourself.

#### Gatsby Theme

Our theme automates everything related to rendering your frontend (SEO, performance, etc), while also providing a common interface to implement your own transformers and resolvers. Or you just re-use one of those we've already written for: WordPress, Netlify CMS, Contentful, MDX

#### Next.js Helper

Use our starter to have a project running in mere minutes, or use our plugins directly to configure everything the way you like... while still profiting from work already done. All components are completely SSR-compatible, too.

#### GraphQL Tooling

Based on our component API we have tooling (based on GraphQL Tools) to automatically generate types and fragments for GraphQL. This can be the perfect building block to creating your shared API between frontend and backend, and, for example, powers the core of our Gatsby theme.

### Community

We try to have a healthy, friendly and active community. Although it's still quite small, this also enables us to respond to requests in a very hands-on fashion.

Feel free to [join us on Discord](https://discord.gg/mwKzD5gejY)!

If that's not your cup of tea, you can also reach out to us:

- Through the [chat widget](https://todo), included in all of our public facing websites (TODO add link that opens Zendesk Widget)
- By [writing us an email](mailto:hello@kickstartds.com)
- By [joining us on Twitter](https://twitter.com/intent/follow?screen_name=kickstartDS)
- By [writing us on WhatsApp](https://wa.me/491752131879?text=Hi!%20I%20am%20interested%20to%20know%20more%20about%20kickstartDS.)

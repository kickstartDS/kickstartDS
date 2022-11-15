---
sidebar_position: 1
---

import { TeaserBox } from '@kickstartds/base/lib/teaser-box';
import { Columns } from '@bedrock-layout/primitives';

# Components

Components are the main building blocks for any user interface. Using reusable components will enhance your product development workflow by reducing design and tech debt and speeding up the process. Following we provide some examples on how customize the compoentns contained kickstartdS to make them your own.

<div ks-theme="docs">
  <Columns columns={2} gutter="md" switchAt={768}>
    <TeaserBox
      topic="Adapt Button component"
      text="This guide shows how to add components to your Design System that use a kickstartDS base component directly"
      link={{
        href: './components/button',
        label: 'See button example',
        variant: 'clear',
        size: 'small',
        iconAfter: {
          icon: 'chevron-right',
        },
      }}
    />
    <TeaserBox
      topic="Customize Headline component"
      text="Customizing a component should be part of your arsenal, see how it would work with the Headline, as one example"
      link={{
        href: './components/headline',
        label: 'Check customize example',
        variant: 'clear',
        size: 'small',
        iconAfter: {
          icon: 'chevron-right',
        },
      }}
    />
    <TeaserBox
      topic="Create TeaserCard component"
      text="This guided example shows how to find a fitting, existing kickstartDS base component for one of your use cases, to repurpose it"
      link={{
        href: './components/teaser-card',
        label: 'Create a card example',
        variant: 'clear',
        size: 'small',
        iconAfter: {
          icon: 'chevron-right',
        },
      }}
    />
    <TeaserBox
      topic="Extend Section component"
      text="This example shows step by step how to reuse the already existing Design Token and component structure to extend it"
      link={{
        href: './components/section',
        label: 'See how to extend the Section',
        variant: 'clear',
        size: 'small',
        iconAfter: {
          icon: 'chevron-right',
        },
      }}
    />
    <TeaserBox
      topic="Create Interstitial component"
      text="This example shows step by step how to create a component based on the complex components from the kickstartDS Content Module"
      link={{
        href: './components/',
        label: 'See Interstitial example',
        variant: 'clear',
        size: 'small',
        iconAfter: {
          icon: 'chevron-right',
        },
      }}
    />
  </Columns>
</div>

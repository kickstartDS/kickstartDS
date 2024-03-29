---
sidebar_position: 5
---

import Admonition from 'react-admonitions';
import { Section } from '@kickstartds/base/lib/section';
import { Columns } from '@bedrock-layout/primitives';
import { Storytelling } from '@kickstartds/content/lib/storytelling';
import myImageUrl from '../../static/img/content-module.png';

# Component Modules

kickstartDS comes with different component modules which are all built on top of each other. Experience all modules and its compontents with all their properties and possibities in our [Storybook](https://www.kickstartds.com/storybook/).

## Core Module `Open Source`

The Core Module is principally the base layer of any kickstartDS instance. It contains no components which you can grab and use further it is rather the foundation for every layout by beholding a `Container Component`, at least that s what we call it. Its speciality is the usage of `container queries`. If you want to learn more about this, take a deeper look into the according information at mozilla.org: [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)

## Base Module `Open Source`

The **kickstartDS Base Module** is our comprehensive component library enabling development teams to create consistent and brand compliant web frontends super efficiently. It contains a solid set of default components being the building blocks to create your Design System from the scratch, code first!

## Form Module `Open Source`

The Form Module contains all the form elements you need to be styled to create your form recipes on top of it. Browse the different form elements in our [Storybook](https://www.kickstartds.com/storybook/?path=/story/@kickstartds/form_form-checkbox--default).

## Blog Module `Open Source`

A Design System is nothing without a system applying it. That's why we created a simple set of components to empower you creating a blog to bring kickstartDS into action. The Blog Module contains five rich components,

Check 'em in the [Storybook](https://www.kickstartds.com/storybook/?path=/story/blog-post-teaser--default).

## **Content Module** `Closed`

As the perfect addition to our Open Source Base, we offer a closed **Content Module**. In almost every project teams need to structur and layout content. Be it your next landing or marking page, your main website, a CMS-project or whenever content is key.

The **Content Module** includes seven rich components: like the famous hero visual, Components for quotes, contact-cards, storytelling etc.  — everything you need to build beautiful content experiences following your very indivisual design decisions. The components from the content Module are ready-made, with well-curated options and connected to the underlaying design and component tokens. You can get a glimpse of what is meant by checking this [blog post](https://www.kickstartds.com/blog/great-components/).

<br/><br/>

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

<Admonition type="tip" title="Do you miss something?">
  We are working on further modules. And you can too! 
  Join our [community](https://discord.gg/mwKzD5gejY) and let us know which components you miss. 
  Or share the phantastical things you have built based on kickstartDS.
</Admonition>

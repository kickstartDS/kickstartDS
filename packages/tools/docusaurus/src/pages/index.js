import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Visual } from '@kickstartds/content/lib/visual';
import { Section } from '@kickstartds/base/lib/section';
import { Button } from '@kickstartds/base/lib/button';
import { Headline } from '@kickstartds/base/lib/headline';
import { Inline, Stack, MasonryGrid } from '@bedrock-layout/primitives';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div>
        <Section
          spaceBefore="small"
          spaceAfter="small"
          width="wide"
          align="center"
          mode="list"
        >
          <Headline
            level="h1"
            styleAs="h1"
            content="kickstartDS documentation"
            subheadline="Learn how to own a Design System without investing years of development."
            align="center"
          />
          <div>
            <Button
              href="/docs/intro"
              label="Get started"
              size="large"
              variant="solid"
            />
          </div>
        </Section>
        <Section
          spaceBefore="small"
          spaceAfter="small"
          width="wide"
          background="accent"
          mode="list"
          align="center"
          gutter="none"
        >
          <Headline
            level="h2"
            styleAs="h3"
            content="Own a Design System in just 5 steps"
            subheadline='Follow our main guide to "Create your Design System"'
            align="center"
          />
          <Inline gutter="sm" justify="center" align="center">
            <Button
              label="Open guide"
              href="/docs/guides/create/"
              variant="outline"
              size="small"
              iconAfter={{
                icon: 'chevron-right',
              }}
            />
            <Button
              label="Use Starter"
              href="/docs/guides/use-our-starter/"
              variant="solid"
              size="small"
              iconAfter={{
                icon: 'chevron-right',
              }}
            />
          </Inline>
        </Section>
      </div>
    </>
  );
}

const siteMap = {
  'intro/index': [
    { label: 'Overview', link: '/docs/intro/' },
    { label: 'Upgrading', link: '/docs/intro/upgrading' },
    { label: 'Environment', link: '/docs/intro/environment' },
    { label: 'CLI Usage', link: '/docs/intro/cli' },
    { label: 'Packages', link: '/docs/intro/packages' },
    { label: 'Next Steps', link: '/docs/intro/next' },
  ],
  'foundations/index': [
    { label: 'Foundations', link: '/docs/foundations/' },
    {
      label: 'Token',
      link: '/docs/foundations/token/',
      items: [
        {
          label: 'Branding Token',
          link: '/docs/foundations/token/branding-token',
        },
        {
          label: 'Design Token',
          link: '/docs/foundations/token/design-token/',
          items: [
            {
              label: 'Color',
              link: '/docs/foundations/token/design-token/color',
            },
            {
              label: 'Typography',
              link: '/docs/foundations/token/design-token/typo',
            },
            {
              label: 'Spacing',
              link: '/docs/foundations/token/design-token/spacing',
            },
            {
              label: 'Border',
              link: '/docs/foundations/token/design-token/border',
            },
            {
              label: 'Shadow',
              link: '/docs/foundations/token/design-token/shadow',
            },
            {
              label: 'Depth',
              link: '/docs/foundations/token/design-token/depth',
            },
            {
              label: 'Breakpoints',
              link: '/docs/foundations/token/design-token/breakpoints',
            },
          ],
        },
        {
          label: 'Component Token',
          link: '/docs/foundations/token/component-token',
        },
      ],
    },
    {
      label: 'Components',
      link: '/docs/foundations/components/',
      items: [
        {
          label: 'Component API',
          link: '/docs/foundations/components/component-api',
        },
        { label: 'Anatomy', link: '/docs/foundations/components/anatomy' },
        { label: 'Styling', link: '/docs/foundations/components/styling' },
        { label: 'Template', link: '/docs/foundations/components/template' },
        { label: 'React', link: '/docs/foundations/components/react' },
      ],
    },
    {
      label: 'Layout',
      link: '/docs/foundations/layout/',
      items: [
        { label: 'Sections', link: '/docs/foundations/layout/sections' },
        { label: 'Bedrock', link: '/docs/foundations/layout/bedrock' },
      ],
    },
    { label: 'Component Modules', link: '/docs/foundations/modules' },
  ],
  'integration/index': [
    { label: 'Integration', link: '/docs/integration/' },
    {
      label: 'Storybook',
      link: '/docs/integration/storybook/',
      items: [
        { label: 'JSON Schema', link: '/docs/integration/storybook/schema' },
        {
          label: 'Design & Component Token',
          link: '/docs/integration/storybook/token',
        },
        {
          label: 'Generated Controls',
          link: '/docs/integration/storybook/controls',
        },
        { label: 'Premade Stories', link: '/docs/integration/storybook/story' },
        { label: 'Theming', link: '/docs/integration/storybook/theming' },
      ],
    },
    {
      label: 'React',
      link: '/docs/integration/react/',
      items: [
        {
          label: 'Image Rendering',
          link: '/docs/integration/react/image-rendering',
        },
        {
          label: 'Rich Text Rendering',
          link: '/docs/integration/react/rich-text-rendering',
        },
      ],
    },
    {
      label: 'Frameworks',
      link: '/docs/integration/frameworks/',
      items: [
        { label: 'Gatsby', link: '/docs/integration/frameworks/gatsby' },
        { label: 'Next.js', link: '/docs/integration/frameworks/nextjs' },
      ],
    },
  ],
  'guides/index': [
    { label: 'Guides', link: '/docs/guides/' },
    {
      label: 'Create your Design System',
      link: '/docs/guides/create/',
      items: [
        {
          label: '1. Start your Design System',
          link: '/docs/guides/create/start',
        },
        { label: '2. Design Application', link: '/docs/guides/create/design' },
        {
          label: '3. Configure Storybook',
          link: '/docs/guides/create/storybook',
        },
        { label: '4. Add Components', link: '/docs/guides/create/components' },
        {
          label: '5. Publish your Design System',
          link: '/docs/guides/create/publish',
        },
      ],
    },
    {
      label: 'Components',
      link: '/docs/guides/components/',
      items: [
        { label: 'Adapt a component', link: '/docs/guides/components/adapt' },
        { label: 'Create a component', link: '/docs/guides/components/create' },
        {
          label: 'Customize a component',
          link: '/docs/guides/components/customize',
        },
        { label: 'Extend a component', link: '/docs/guides/components/extend' },
        { label: 'Add a Recipe', link: '/docs/guides/components/recipe' },
      ],
    },
    {
      label: 'Examples',
      link: '/docs/guides/examples/',
      items: [
        {
          label: 'Components',
          link: '/docs/guides/examples/components/',
          items: [
            {
              label: 'Adapt Button component',
              link: '/docs/guides/examples/components/button',
            },
            {
              label: 'Customize Headline component',
              link: '/docs/guides/examples/components/headline',
            },
            {
              label: 'Create TeaserCard component',
              link: '/docs/guides/examples/components/teaser-card',
            },
            {
              label: 'Extend Section component',
              link: '/docs/guides/examples/components/section',
            },
            {
              label: 'Create Interstitial component',
              link: '/docs/guides/examples/components/interstitial',
            },
          ],
        },
        {
          label: 'Recipes',
          link: '/docs/guides/examples/recipes/',
          items: [
            {
              label: 'ArticleTeaser recipe',
              link: '/docs/guides/examples/recipes/article-teaser',
            },
          ],
        },
      ],
    },
    {
      label: 'Migrations',
      link: '/docs/guides/migrations',
      items: [
        {
          label: 'Upgrade to 2.0.0',
          link: '/docs/guides/migrations/upgrade-2.0.0',
        },
      ],
    },
    { label: 'Using our Starter', link: '/docs/guides/use-our-starter' },
    {
      label: 'Design System Initiative',
      link: '/docs/guides/design-system-initiative',
    },
  ],
  'concepts/index': [
    { label: 'Concepts (coming soon)', link: '/docs/concepts/' },
  ],
};

export const createMenu = (page) => (
  <li>
    <a href={page.link}>{page.label}</a>
    {page.items && page.items.length > 0 && (
      <ul>
        {page.items.map((subPage) => (
          <li>
            <a href={subPage.link}>{subPage.label}</a>
            {subPage.items && subPage.items.length > 0 && (
              <ul>
                {subPage.items.map((subSubPage) => createMenu(subSubPage))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { navbar } = siteConfig.themeConfig;
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="kickstartDS is a comprehensive component and pattern library, enabling web development teams to create consistent and brand compliant web frontends super efficiently"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Section
          headline={{
            content: 'Sitemap',
            spaceAfter: 'small',
            align: 'left',
            subheadline: 'Quick access to all pages of our main docs sections:',
          }}
          spaceBefore="small"
          spaceAfter="small"
          width="max"
          gutter="none"
          background="accent"
        >
          <MasonryGrid gutter="2rem" minItemWidth="20rem">
            {navbar &&
              navbar.items &&
              navbar.items.length > 0 &&
              navbar.items.slice(0, -4).map((section, idx) => (
                <Stack key={idx} gutter="xs">
                  <Headline level="p" styleAs="h5" content={section.label} />
                  {siteMap[section.docId] && siteMap[section.docId].length > 0 && (
                    <>
                      <strong>Section overview:</strong>
                      <ul className="docs-pagetree">
                        {siteMap[section.docId].map((page) => createMenu(page))}
                      </ul>
                    </>
                  )}
                  <Button
                    label={`Open ${section.label} section`}
                    href={section.docId.replace('index', '')}
                    variant="clear"
                    size="small"
                    iconAnimation
                    iconAfter={{
                      icon: 'chevron-right',
                    }}
                  />
                </Stack>
              ))}
          </MasonryGrid>
        </Section>
      </main>
    </Layout>
  );
}

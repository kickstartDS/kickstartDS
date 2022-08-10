import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Visual } from '@kickstartds/content/lib/visual';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Visual
        box={{
          inverted: 'false',
          background: 'transparent',
          enabled: true,
          headline: {
            level: 'h1',
            styleAs: 'h1',
            content: 'Welcome 👋',
            subheadline: 'Get started with the kickstartDS Design System!',
          },
          horizontal: 'center',
          indent: false,
          text: "Explore our frontend first framework, and all of its comprehensive components backing our landing page, our Wordpress blog and the glossary. Take a deeper look at our design and component tokens, interact with the Storybook controls, or preview some sample pages we've assembled.",
          vertical: 'center',
        }}
        media={{
          image: {
            indent: 'none',
            srcDesktop: 'img/banner/welcome-centered.svg',
            srcTablet: 'img/banner/welcome-centered.svg',
            srcMobile: 'img/banner/welcome-centered-m.svg',
          },
          mode: 'image',
        }}
      />
      <Visual
        backgroundColor="var(--ifm-background-surface-color)"
        box={{
          background: 'transparent',
          enabled: true,
          headline: {
            level: 'h3',
            styleAs: 'h3',
            content: 'kickstartDS docs',
            subheadline: '... easy like squeeeeezing a lemon',
          },
          horizontal: 'center',
          indent: false,
          link: {
            inverted: 'false',
            enabled: true,
            fillAnimation: false,
            href: 'https://example.com',
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            icon: {
              icon: 'chevron-right',
            },
            label: 'Learn how to migrate to 2.0.0 - 5min ⏱️',
            newTab: false,
            size: 'medium',
            variant: 'solid',
          },
          vertical: 'center',
        }}
        height="small"
      />
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

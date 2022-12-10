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
          <div>
            <Button
              label="Open guide"
              href="/docs/guides/create/"
              variant="outline"
            />
          </div>
        </Section>
      </div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Basics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn about design token, component and recipe use in{' '}
        <strong>kickstartDS</strong>. These building blocks lay the foundation
        for a thorough understanding of more complex topics.
      </>
    ),
    link: '/docs/basics',
  },
  {
    title: 'Integration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dive into the different ways <strong>kickstartDS</strong> components can
        be leveraged to speed up prototyping, implementation and integration of
        frontend code.
      </>
    ),
    link: '/docs/integration',
  },
  {
    title: 'Guides',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Look up examples for inspiration, or faster ramp up, when developing. Or
        follow our short guides on focussed problems and their solution inside{' '}
        <strong>kickstartDS</strong>.
      </>
    ),
    link: '/docs/guides',
  },
  {
    title: 'Concepts',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Take a look behind the curtain: in-depth articles about the architecture
        of <strong>kickstartDS</strong>; which concepts are used, and what's the
        rationale for doing so.
      </>
    ),
    link: '/docs/concepts',
  },
  {
    title: 'Feedback',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Read through our FAQs, answering the most common questions. ... or get
        in contact with us for support on Twitter, Discord, Website Chat or via
        Email.
      </>
    ),
    link: '/docs/feedback',
  },
  {
    title: 'Roadmap',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Everything about our process of development, next releases, and how you
        can get involved. We're super excited about contributions, so please
        don't be shy!
      </>
    ),
    link: '/docs/roadmap',
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>Learn more</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

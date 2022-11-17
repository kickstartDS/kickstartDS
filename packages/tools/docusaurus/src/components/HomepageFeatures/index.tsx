import React from 'react';

import { TeaserBox } from '@kickstartds/base/lib/teaser-box';
import { TeaserRow } from '@kickstartds/base/lib/teaser-row';
import { Picture } from '@kickstartds/base/lib/picture';
import { Icon } from '@kickstartds/base/lib/icon';
import { Section } from '@kickstartds/base/lib/section';
import {
  PictureContextDefault,
  PictureContext,
} from '@kickstartds/base/lib/picture';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const PictureWrapper = (props) => {
  if (typeof props.src === 'function') {
    const Image = props.src;

    return (
      <div className="c-teaser__image">
        <Image />
      </div>
    );
  }

  return <PictureContextDefault {...props} />;
};

const PictureProvider = (props) => (
  <PictureContext.Provider value={PictureWrapper} {...props} />
);

const FeatureList = [
  {
    title: 'Foundations',
    linkLabel: 'Go to Foundations',
    Svg: require('@site/static/icon/basics.svg').default,
    description:
      'Learn about design token, component and recipe use in **kickstartDS**. These building blocks lay the foundation for a thorough understanding of more complex topics.',
    link: '/docs/foundations',
  },
  {
    title: 'Integration',
    linkLabel: 'Learn about Integration',
    Svg: require('@site/static/icon/integration.svg').default,
    description:
      'Dive into the different ways **kickstartDS** components can be leveraged to speed up prototyping, implementation and integration of frontend code.',
    link: '/docs/integration',
  },
  {
    title: 'Guides',
    linkLabel: 'Read Guides',
    Svg: require('@site/static/icon/guides.svg').default,
    description:
      'Look up examples for inspiration, or faster ramp up, when developing. Or follow our short guides on focussed problems and their solution inside **kickstartDS**.',
    link: '/docs/guides',
  },
  {
    title: 'Concepts',
    linkLabel: 'Explore Concepts',
    Svg: require('@site/static/icon/concepts.svg').default,
    description:
      "Take a look behind the curtain: in-depth articles about the architecture of **kickstartDS**; which concepts are used, and what's the rationale for doing so.",
    link: '/docs/concepts',
  },
  {
    title: 'Feedback',
    linkLabel: 'See Feedback',
    Svg: require('@site/static/icon/feedback.svg').default,
    description:
      'Read through our FAQs, answering the most common questions. ... or get in contact with us for support on Twitter, Discord, Website Chat or via Email.',
    link: '/docs/feedback',
  },
  {
    title: 'Roadmap',
    linkLabel: 'Show the Roadmap',
    Svg: require('@site/static/icon/roadmap.svg').default,
    description:
      "Everything about our process of development, next releases, and how you can get involved. We're super excited about contributions, so please don't be shy!",
    link: '/docs/roadmap',
  },
];

export default function HomepageFeatures() {
  return (
    <PictureProvider>
      <Section ks-theme="docs" width="default">
        {FeatureList.map(
          ({ title, Svg, description, link, linkLabel }, idx) => (
            <TeaserBox
              className="c-teaser-icon"
              key={idx}
              topic={title}
              image={Svg}
              text={description}
              link={{
                label: linkLabel,
                href: link,
                variant: 'clear',
                size: 'small',
                hidden: false,
                iconAnimation: true,
                iconAfter: {
                  icon: 'chevron-right',
                },
              }}
              renderTopic={(topic) => (
                <>
                  <Svg className={styles.featureSvg} role="img" />
                  <span>{topic}</span>
                </>
              )}
            />
          )
        )}
      </Section>
    </PictureProvider>
  );
}

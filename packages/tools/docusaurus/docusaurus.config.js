// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const theme = require('shiki/themes/nord.json');
const { remarkCodeHike } = require('@code-hike/mdx');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kickstartDS docs',
  tagline: '... easy like squeeeeezing a lemon',
  url: 'https://www.kickstartDS.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kickstartDS', // Usually your GitHub org/user name.
  projectName: 'kickstartDS', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          // path: '../../components/core/docs',
          beforeDefaultRemarkPlugins: [[remarkCodeHike, { theme }]],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kickstartDS/kickstartDS/tree/main/packages/components/core/docs/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve(
              '../../components/core/lib/design-tokens/tokens.css'
            ),
            require.resolve('@code-hike/mdx/styles.css'),
            require.resolve('./src/css/ks-tokens.css'),
            require.resolve('./src/css/visual.css'),
            require.resolve('./src/css/button.css'),
            require.resolve('./src/css/section.css'),
            require.resolve('./src/css/teaser.css'),
            require.resolve('./src/css/headline.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/mapping.css'),
          ],
        },
      }),
    ],
  ],

  themes: ['mdx-v2'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'kickstartDS Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'basics/index',
            position: 'left',
            label: 'Basics',
          },
          {
            type: 'doc',
            docId: 'integration/index',
            position: 'left',
            label: 'Integration',
          },
          {
            type: 'doc',
            docId: 'guides/index',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'concepts/index',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'doc',
            docId: 'roadmap/index',
            position: 'right',
            label: 'Roadmap',
          },
          {
            type: 'doc',
            docId: 'feedback/index',
            position: 'right',
            label: 'Feedback',
          },
          {
            href: 'https://github.com/kickstartDS/kickstartDS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/mwKzD5gejY',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kickstartds',
              },
              {
                label: 'Stackshare',
                href: 'https://stackshare.io/kickstartds/kickstartds',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.kickstartds.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kickstartDS/kickstartDS',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kickstartDS, ruhmesmeile GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'beta_release',
        content:
          "We're currently approaching our first major open source release (2.0.0), read more in this <a target='_blank' rel='noopener noreferrer' href='#'>blog post</a>",
        backgroundColor: 'var(--ks-color-primary)',
        textColor: 'var(--ks-color-primary-inverted)',
        isCloseable: false,
      },
    }),
};

module.exports = config;

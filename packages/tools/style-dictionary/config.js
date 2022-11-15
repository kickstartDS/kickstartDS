const filter = require('./filters');
const format = require('./formats');
const parsers = require('./parsers');

module.exports = {
  filter,
  format,
  parsers,
  platforms: {
    css: {
      transformGroup: 'css',
      files: [
        {
          format: 'css/kds-variables',
          destination: 'tokens.css',
          options: {
            outputReferences: true,
          },
          filter: 'excludeIcons',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      files: [
        {
          format: 'scss/map-deep',
          destination: '_token-map.scss',
          options: {
            outputReferences: true,
          },
          filter: 'excludeIcons',
        },
      ],
    },
    html: {
      files: [
        {
          format: 'html/icon-sprite',
          destination: 'icon-sprite.html',
          filter: 'includeIcons',
        },
      ],
    },
    jsx: {
      files: [
        {
          format: 'jsx/icon-sprite',
          destination: 'IconSprite.js',
          filter: 'includeIcons',
        },
      ],
    },
    storybook: {
      transformGroup: 'css',
      files: [
        {
          format: 'storybook/tokens',
          destination: 'tokens.css',
          filter: 'excludeIcons',
        },
        {
          format: 'storybook/icons',
          destination: 'icons.svg',
          filter: 'includeIcons',
        },
      ],
    },
  },
};

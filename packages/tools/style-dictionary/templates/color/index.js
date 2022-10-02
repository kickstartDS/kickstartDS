const primary = require('./primary');
const foreground = require('./foreground');
const link = require('./link');
const transparent = require('./transparent');
const colorScale = require('./colorScale');

const knownColorKeys = [
  'primary',
  'primary-inverted',
  'background',
  'foreground',
  'link',
  'link-inverted',
];

module.exports = (data) => {
  const additional = Object.keys(data.color)
    .filter(
      (key) => !knownColorKeys.includes(key) && !key.endsWith('-inverted')
    )
    .reduce((prev, key) => ({ ...prev, ...colorScale(key)(data) }), {});

  return {
    ks: {
      color: {
        ...primary(data),
        ...foreground(data),
        ...link(data),
        ...transparent(data),
        ...additional,
      },
    },
  };
};

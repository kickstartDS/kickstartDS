const foreground = require('./foreground');
const background = require('./background');
const transparent = require('./transparent');
const colorScale = require('./colorScale');

const knownColorKeys = [
  'background',
  'background-inverted',
  'foreground',
  'foreground-inverted',
];

module.exports = (data) => {
  const additional = Object.keys(data.color)
    .filter(
      (color, i, colors) =>
        !knownColorKeys.includes(color) &&
        !color.endsWith('-inverted') &&
        colors.includes(`${color}-inverted`)
    )
    .reduce((prev, key) => ({ ...prev, ...colorScale(key)(data) }), {});

  return {
    ks: {
      color: {
        ...foreground(data),
        ...background(data),
        ...transparent(data),
        ...additional,
      },
    },
  };
};

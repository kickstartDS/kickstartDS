const borderColorAccent = require('./accent');
const borderColorClear = require('./clear');
const borderColorDefault = require('./default');
const borderColorInterface = require('./interface');
const borderColorCard = require('./card');
const borderColorCustom = require('./custom');

const predefined = ['background', 'foreground', 'link'];

module.exports = (data) => {
  const additional = Object.keys(data.color)
    .filter(
      (color, i, colors) =>
        !predefined.includes(color) &&
        !color.endsWith('-inverted') &&
        colors.includes(`${color}-inverted`)
    )
    .reduce(
      (prev, key) => ({
        ...prev,
        ...borderColorCustom(key),
      }),
      {}
    );

  return {
    ks: {
      'border-color': {
        ...borderColorAccent(data),
        ...borderColorClear(data),
        ...borderColorDefault(data),
        ...borderColorInterface(data),
        ...borderColorCard(data),
        ...additional,
      },
    },
  };
};

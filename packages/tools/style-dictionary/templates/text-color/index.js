const textColorDefault = require('./default');
const textColorCopy = require('./copy');
const textColorDisplay = require('./display');
const textColorInterface = require('./interface');
const textColorCard = require('./card');
const textColorCustom = require('./custom');

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
        ...textColorCustom(key),
      }),
      {}
    );

  return {
    ks: {
      'text-color': {
        ...textColorDefault(data),
        ...textColorCopy(data),
        ...textColorDisplay(data),
        ...textColorInterface(data),
        ...textColorCard(data),
        ...additional,
      },
    },
  };
};

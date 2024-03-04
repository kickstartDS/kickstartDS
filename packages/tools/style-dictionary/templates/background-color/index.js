const backgroundColorAccent = require('./accent');
const backgroundColorBold = require('./bold');
const backgroundColorClear = require('./clear');
const backgroundColorDefault = require('./default');
const backgroundColorInterface = require('./interface');
const backgroundColorCard = require('./card');
const backgroundColorCustom = require('./custom');

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
        ...backgroundColorCustom(key),
      }),
      {}
    );

  return {
    ks: {
      'background-color': {
        ...backgroundColorAccent(data),
        ...backgroundColorBold(data),
        ...backgroundColorClear(data),
        ...backgroundColorDefault(data),
        ...backgroundColorInterface(data),
        ...backgroundColorCard(data),
        ...additional,
      },
    },
  };
};

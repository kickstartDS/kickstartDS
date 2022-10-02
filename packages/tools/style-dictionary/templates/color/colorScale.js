const Color = require('tinycolor2');
const { alphaScale, capitalizeFirstLetter } = require('../_helper');

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const scale = alphaScale(indices.length);

module.exports = (name) => {
  const token = (value) => ({
    value: value.toRgb(),
    attributes: { category: 'color' },
    token: {
      category: `Colors: ${capitalizeFirstLetter(name)}`,
      presenter: 'Color',
    },
  });

  return ({ color }) => ({
    [name]: {
      base: token(Color(color[name])),
      alpha: Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          { base: token(Color(color[name]).setAlpha(scale[index])) },
        ])
      ),
      'to-bg': Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              Color.mix(color[name], color.background, scale[index] * 100)
            ),
          },
        ])
      ),
    },
    [`${name}-inverted`]: {
      base: token(Color(color[`${name}-inverted`])),
      alpha: Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              Color(color[`${name}-inverted`]).setAlpha(scale[index])
            ),
          },
        ])
      ),
      'to-bg': Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              Color.mix(
                color[`${name}-inverted`],
                color.foreground,
                scale[index] * 100
              )
            ),
          },
        ])
      ),
    },
  });
};

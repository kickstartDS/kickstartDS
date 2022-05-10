const Color = require('tinycolor2');
const { alphaScale } = require('../_helper');

const token = (value, label = '') => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: {
    category: `Colors: Primary Inverted ${label}`.trim(),
    presenter: 'Color',
  },
});

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const scale = alphaScale(indices.length);

module.exports = ({ color }) => {
  const primaryInverted = Color(color['primary-inverted']);
  return {
    'primary-inverted': {
      _: token(primaryInverted),
      alpha: Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          token(primaryInverted.setAlpha(scale[index]), 'Alpha Scale'),
        ])
      ),
    },
  };
};

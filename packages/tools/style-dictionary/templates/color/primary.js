const Color = require('tinycolor2');
const { alphaScale } = require('../_helper');

const token = (value) => ({
  value: value.toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Primary', presenter: 'Color' },
});

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const scale = alphaScale(indices.length);

module.exports = ({ color }) => ({
  primary: {
    base: token(Color(color.primary)),
    alpha: Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        { base: token(Color(color.primary).setAlpha(scale[index])) },
      ])
    ),
    'to-bg': Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        {
          base: token(
            Color.mix(color.primary, color.background, scale[index] * 100)
          ),
        },
      ])
    ),
  },
  'primary-inverted': {
    base: token(Color(color['primary-inverted']), 'Inverted'),
    alpha: Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        {
          base: token(Color(color['primary-inverted']).setAlpha(scale[index])),
        },
      ])
    ),
    'to-bg': Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        {
          base: token(
            Color.mix(
              color['primary-inverted'],
              color.foreground,
              scale[index] * 100
            )
          ),
        },
      ])
    ),
  },
});

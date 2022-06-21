const Color = require('tinycolor2');
const { alphaScale } = require('../_helper');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Foreground', presenter: 'Color' },
});

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const scale = alphaScale(indices.length);

module.exports = ({ color }) => ({
  fg: {
    base: token(color.foreground),
    alpha: Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        { base: token(Color(color.foreground).setAlpha(scale[index])) },
      ])
    ),
    'to-bg': Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        {
          base: token(
            Color.mix(color.foreground, color.background, scale[index] * 100)
          ),
        },
      ])
    ),
  },
  'fg-inverted': {
    base: token(color.background, 'Inverted'),
    alpha: Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        { base: token(Color(color.background).setAlpha(scale[index])) },
      ])
    ),
    'to-bg': Object.fromEntries(
      indices.map((index) => [
        index.toString(),
        {
          base: token(
            Color.mix(color.background, color.foreground, scale[index] * 100)
          ),
        },
      ])
    ),
  },
});

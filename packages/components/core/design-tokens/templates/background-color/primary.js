const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Primary', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  primary: {
    interactive: {
      _: token(color.primary),
      hover: token(Color.mix(color.primary, color.background, 20)),
      active: token(Color.mix(color.primary, color.background, 30)),
    },
    translucent: token('{ks.color.primary.alpha.8}'),
  },
  'primary-inverted': {
    interactive: {
      _: token(color['primary-inverted']),
      hover: token(Color.mix(color['primary-inverted'], color.foreground, 10)),
      active: token(Color.mix(color['primary-inverted'], color.foreground, 20)),
    },
    translucent: token('{ks.color.primary-inverted.alpha.8}'),
  },
});

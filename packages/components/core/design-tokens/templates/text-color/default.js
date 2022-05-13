const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Default', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  default: {
    base: token('{ks.color.fg.base}'),
    interactive: {
      _: token(color.link),
      hover: token(color.link),
      active: token(color.link),
      visited: token(color.link),
    },
  },
  'default-inverted': { base: token('{ks.color.fg-inverted.base}') },
});

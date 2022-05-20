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
      base: token(color.link),
      hover: { base: token(color.link) },
      active: { base: token(color.link) },
      visited: { base: token(color.link) },
    },
  },
  'default-inverted': {
    base: token('{ks.color.fg-inverted.base}'),
    interactive: {
      base: token(color['link-inverted']),
      hover: { base: token(color['link-inverted']) },
      active: { base: token(color['link-inverted']) },
      visited: { base: token(color['link-inverted']) },
    },
  },
});

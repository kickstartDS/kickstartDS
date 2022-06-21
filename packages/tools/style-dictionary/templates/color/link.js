const Color = require('tinycolor2');

const token = (value) => ({
  value: value.toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Link', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  link: {
    base: token(Color(color.link)),
  },
  'link-inverted': {
    base: token(Color(color['link-inverted']), 'Inverted'),
  },
});

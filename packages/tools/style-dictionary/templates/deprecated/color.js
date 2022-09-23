const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color', deprecated: true },
});

module.exports = ({ color }) => ({
  color: {
    white: token(color.background),
    error: token('#e60201'),
  },
});

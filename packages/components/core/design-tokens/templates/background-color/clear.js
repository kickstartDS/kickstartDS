const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Clear', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  clear: {
    interactive: {
      _: token(Color(color.background).setAlpha(0)),
      hover: token(Color(color.primary).setAlpha(0.1)),
      active: token(Color(color.primary).setAlpha(0.2)),
    },
    // TBD do we need clear inverted? maybe for the hover- & active-states (?)
    inverted: {
      interactive: {
        _: token(Color(color.background).setAlpha(0)),
        hover: token(Color(color.primary).setAlpha(0.2)),
        active: token(Color(color.primary).setAlpha(0.3)),
      },
    },
  },
});

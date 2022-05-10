const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
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
    inverted: {
      tbd: {
        _: token(Color(color['primary-inverted']).setAlpha(0.8)),
      },
      interactive: {
        _: token(color['primary-inverted']),
        hover: token(Color.mix(color['primary-inverted'], color.primary, 10)),
        active: token(Color.mix(color['primary-inverted'], color.primary, 20)),
      },
    },
    tbd: {
      _: token(Color(color.primary).setAlpha(0.8)),
      interactive: token(color['primary-inverted']),
    },
  },
});

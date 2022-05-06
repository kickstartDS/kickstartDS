const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color', deprecated: true },
});

module.exports = ({ color }) => ({
  color: {
    black: {
      _: token(color.foreground),
      alpha: {
        1: token(Color(color.foreground).setAlpha(0.1)),
        2: token(Color(color.foreground).setAlpha(0.2)),
        3: token(Color(color.foreground).setAlpha(0.3)),
        5: token(Color(color.foreground).setAlpha(0.5)),
        7: token(Color(color.foreground).setAlpha(0.7)),
      },
    },
    white: {
      _: token(color.background),
      alpha: {
        1: token(Color(color.background).setAlpha(0.1)),
      },
    },
    grey: {
      1: token(Color.mix(color.foreground, color.background, 90)),
      2: token(Color.mix(color.foreground, color.background, 80)),
      3: token(Color.mix(color.foreground, color.background, 70)),
      7: token(Color.mix(color.foreground, color.background, 30)),
      9: token(Color.mix(color.foreground, color.background, 10)),
    },
    error: token('#e60201'),
  },
});

const { round } = require('../_helper');

module.exports = ({ breakpoints }) => ({
  ks: {
    breakpoint: Object.entries(breakpoints).reduce(
      (prev, [key, px]) => ({
        ...prev,
        [key]: { value: `${round(px / 16)}em`, private: true },
      }),
      {}
    ),
  },
});

const { alpha, lighter, darker } = require('../../token-helper/color');

module.exports = {
  color: {
    primary: {
      _: {
        value: '#333',
        // value: "#1971c2", // blue
        // value: "#ae3ec9", // grape
        token: { category: 'Colors: Brand' },
      },
      alpha: alpha('primary', { category: 'Colors: Primary Alpha' }),
      lighter: lighter('primary', { category: 'Colors: Primary Lighter' }),
      darker: darker('primary', { category: 'Colors: Primary Darker' }),
    },
  },
};

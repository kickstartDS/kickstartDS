const { alpha, lighter, darker } = require('../../token-helper/color');

module.exports = {
  color: {
    primary: {
      r: { value: '51', attributes: { category: null } },
      g: { value: '51', attributes: { category: null } },
      b: { value: '51', attributes: { category: null } },
      _: {
        value: {
          r: '{color.primary.r.value}',
          g: '{color.primary.g.value}',
          b: '{color.primary.b.value}',
        },
        token: { category: 'Colors: Brand' },
      },
      alpha: alpha('primary', { category: 'Colors: Primary Alpha' }),
      lighter: lighter('primary', { category: 'Colors: Primary Lighter' }),
      darker: darker('primary', { category: 'Colors: Primary Darker' }),
    },
  },
};

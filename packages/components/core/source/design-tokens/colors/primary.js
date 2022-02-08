const { alpha, lighter, darker } = require('../../token-helper/color');

module.exports = {
  color: {
    primary: {
      r: { value: '51', attributes: { category: null } },
      g: { value: '51', attributes: { category: null } },
      b: { value: '51', attributes: { category: null } },
      _: {
        value:
          'rgb({color.primary.r.value},{color.primary.g.value},{color.primary.b.value})',
        token: { category: 'Colors: Brand' },
      },
      ...alpha('primary', { category: 'Colors: Primary Alpha' }),
      ...lighter('primary', { category: 'Colors: Primary Lighter' }),
      ...darker('primary', { category: 'Colors: Primary Darker' }),
    },
  },
};

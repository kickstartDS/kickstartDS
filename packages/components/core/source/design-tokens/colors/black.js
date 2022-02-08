const { alpha } = require('../../token-helper/color');

const token = { category: 'Colors: Shades Black' };

module.exports = {
  color: {
    black: {
      r: {
        value: '0',
        attributes: {
          category: null,
        },
      },
      g: {
        value: '0',
        attributes: { category: null },
      },
      b: {
        value: '0',
        attributes: { category: null },
      },
      _: {
        value:
          'rgb({color.black.r.value},{color.black.g.value},{color.black.b.value})',
        token,
      },
      ...alpha('black', token),
    },
  },
};

const { alpha } = require('../../token-helper/color');

const token = { category: 'Colors: Shades White' };

module.exports = {
  color: {
    white: {
      _: {
        value: '#fff',
        token,
      },
      alpha: alpha('white', token),
    },
  },
};

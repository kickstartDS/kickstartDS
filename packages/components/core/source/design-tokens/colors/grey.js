const { mix } = require('../../token-helper/color');

module.exports = {
  color: {
    ...mix('grey', 'white', 'black'),
  },
};

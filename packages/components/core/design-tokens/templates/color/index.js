const primary = require('./primary');
const primaryInverted = require('./primary-inverted');

module.exports = (data) => ({
  ks: {
    color: {
      ...primary(data),
      ...primaryInverted(data),
    },
  },
});

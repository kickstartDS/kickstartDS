const primary = require('./primary');

module.exports = (data) => ({
  ks: {
    color: {
      ...primary(data),
    },
  },
});

const primary = require('./primary');
const foreground = require('./foreground');

module.exports = (data) => ({
  ks: {
    color: {
      ...primary(data),
      ...foreground(data),
    },
  },
});

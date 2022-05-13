const primary = require('./primary');
const foreground = require('./foreground');
const transparent = require('./transparent');

module.exports = (data) => ({
  ks: {
    color: {
      ...primary(data),
      ...foreground(data),
      ...transparent(data),
    },
  },
});

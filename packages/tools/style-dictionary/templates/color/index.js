const primary = require('./primary');
const foreground = require('./foreground');
const link = require('./link');
const transparent = require('./transparent');

module.exports = (data) => ({
  ks: {
    color: {
      ...primary(data),
      ...foreground(data),
      ...link(data),
      ...transparent(data),
    },
  },
});

const color = require('./color');
const global = require('./global');

module.exports = (data) => ({
  ...color(data),
  ...global(data),
});

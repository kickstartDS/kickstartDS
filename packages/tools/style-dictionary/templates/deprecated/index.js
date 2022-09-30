const global = require('./global');

module.exports = (data) => ({
  ...global(data),
});

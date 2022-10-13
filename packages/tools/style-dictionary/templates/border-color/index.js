const borderColorAccent = require('./accent');
const borderColorClear = require('./clear');
const borderColorDefault = require('./default');
const borderColorInterface = require('./interface');
const borderColorPrimary = require('./primary');

module.exports = (data) => ({
  ks: {
    'border-color': {
      ...borderColorAccent(data),
      ...borderColorClear(data),
      ...borderColorDefault(data),
      ...borderColorInterface(data),
      ...borderColorPrimary(data),
    },
  },
});

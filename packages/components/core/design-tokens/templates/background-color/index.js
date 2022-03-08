const backgroundColorAccent = require('./accent');
const backgroundColorClear = require('./clear');
const backgroundColorDefault = require('./default');
const backgroundColorInterface = require('./interface');
const backgroundColorPrimary = require('./primary');

module.exports = (data) => ({
  'background-color': {
    accent: backgroundColorAccent(data),
    clear: backgroundColorClear(data),
    default: backgroundColorDefault(data),
    interface: backgroundColorInterface(data),
    primary: backgroundColorPrimary(data),
  },
});

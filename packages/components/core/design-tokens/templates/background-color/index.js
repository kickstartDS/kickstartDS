const backgroundColorAccent = require('./accent');
const backgroundColorClear = require('./clear');
const backgroundColorDefault = require('./default');
const backgroundColorInterface = require('./interface');
const backgroundColorPrimary = require('./primary');

module.exports = (data) => ({
  'background-color': {
    ...backgroundColorAccent(data),
    ...backgroundColorClear(data),
    ...backgroundColorDefault(data),
    ...backgroundColorInterface(data),
    ...backgroundColorPrimary(data),
  },
});

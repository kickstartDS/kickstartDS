const textColorDefault = require('./default');
const textColorInterface = require('./interface');
const textColorPrimary = require('./primary');

module.exports = (data) => ({
  'text-color': {
    ...textColorDefault(data),
    ...textColorInterface(data),
    ...textColorPrimary(data),
  },
});

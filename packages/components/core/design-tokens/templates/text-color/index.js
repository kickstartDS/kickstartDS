const textColorDefault = require('./default');
const textColorInterface = require('./interface');
const textColorPrimary = require('./primary');

module.exports = (data) => ({
  'text-color': {
    default: textColorDefault(data),
    interface: textColorInterface(data),
    primary: textColorPrimary(data),
  },
});

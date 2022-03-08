const backgroundColor = require('./background-color');
const textColor = require('./text-color');
const typo = require('./typo');
const spacing = require('./spacing');

module.exports = (data) => ({
  ks: {
    ...backgroundColor(data),
    ...textColor(data),
    ...typo(data),
    ...spacing(data),
  },
});

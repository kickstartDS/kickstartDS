const backgroundColor = require('./background-color');
const textColor = require('./text-color');
const typo = require('./typo');
const spacing = require('./spacing');
const breakpoints = require('./breakpoints');
const deprecated = require('./deprecated');
const border = require('./border');
const boxShadow = require('./box-shadow');
const transition = require('./transition');

module.exports = (data) => ({
  ks: {
    ...backgroundColor(data),
    ...textColor(data),
    ...typo(data),
    ...spacing(data),
    ...breakpoints(data),
    ...border(data),
    ...boxShadow(data),
    ...transition(data),
  },
  ...deprecated(data),
});

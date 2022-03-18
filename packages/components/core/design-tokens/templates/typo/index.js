const typoFontFamily = require('./font-family');
const typoFontWeight = require('./font-weight');
const typoSize = require('./size');

module.exports = (data) => ({
  'font-family': typoFontFamily(data),
  'font-weight': typoFontWeight(data),
  ...typoSize(data),
});

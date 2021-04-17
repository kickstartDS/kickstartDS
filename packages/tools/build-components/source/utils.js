const path = require('path');
const findup = require('find-up');

module.exports = {
  root: path.dirname(findup.sync('lerna.json', { cwd: __dirname })),
  dirRe: /.+\/(.+)\/(.+)\.(.+)$/,
};

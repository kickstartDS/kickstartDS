const path = require('path');
const findup = require('find-up');

let root;

try {
  root = path.dirname(findup.sync('lerna.json', { cwd: __dirname }));
} catch (e) {
  root = process.cwd();
}

module.exports = {
  root,
  dirRe: /.+\/(.+)\/(.+)\.(.+)$/,
  sourcePath: `${process.cwd()}/source`,
};

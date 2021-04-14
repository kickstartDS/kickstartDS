require('dotenv').config();
const { relative, resolve, join } = require('path');
const { cosmiconfigSync } = require('cosmiconfig');

process.env.RM_FRONTEND_RC = process.env.RM_FRONTEND_RC || 'default';

const explorer = cosmiconfigSync('rm-frontend');
const result =
  process.env.RM_FRONTEND_RC === 'default'
    ? explorer.search()
    : explorer.load(`.rm-frontendrc.${process.env.RM_FRONTEND_RC}.js`);

if (!result || result.isEmpty) {
  throw new Error('.rm-fontendrc not found!');
}

const rootpath = process.cwd();
const modulespath = resolve(__dirname, '../../..');
const instancepath = result.config.instance;
const temproot = join(rootpath, 'tmp');
const temppath = join(temproot, process.env.RM_FRONTEND_RC);

// cleanup
delete result.config.instance;
delete result.config.extend;

module.exports = {
  ...result,
  rootpath,
  modulespath,
  temproot,
  temppath,
  instancepath,
  relativeRoot: (path) => relative(path, rootpath),
};

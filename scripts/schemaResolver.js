const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');

const urlRegExp =
  /^http:\/\/schema\.kickstartds\.com\/([a-z-]+)\/([a-z-]+)\.(?:schema|definitions)\.json$/;
const cwd = path.resolve(__dirname, '..');

const schemaResolver = {
  canRead: /^http:\/\/schema\.kickstartds\.com/i,
  async read(file) {
    const [, mod, name] = urlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `packages/components/${mod}/source/**/${name}.(schema|definitions).json`,
      { cwd, absolute: true }
    );
    return fs.readJSON(resolvedPath);
  },
};

module.exports = { schemaResolver };

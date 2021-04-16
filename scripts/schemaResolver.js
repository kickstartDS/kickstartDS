const fs = require('fs-extra');
const glob = require('fast-glob');

const numberingMapping = {
  base: '0-base',
  atoms: '1-atoms',
  molecules: '2-molecules',
  organisms: '3-organisms',
  templates: '4-templates',
  pages: '5-pages',
};

const urlRegExp = /^http:\/\/frontend\.ruhmesmeile\.com\/([a-z-_]+)\/([a-z-_]+)\/([a-z-_/]+)\.(?:schema|definitions)\.json$/;

const schemaResolver = {
  canRead: /^http:\/\/frontend\.ruhmesmeile\.com/i,
  async read(file) {
    const [, module, type, name] = urlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `packages/{@rm-frontend,components}/${module}/source/${numberingMapping[type]}/**/${name}.(schema|definitions).json`
    );
    return fs.readJSON(resolvedPath);
  },
};

module.exports = { schemaResolver };

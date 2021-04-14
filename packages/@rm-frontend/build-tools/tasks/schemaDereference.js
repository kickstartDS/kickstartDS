const fs = require('fs-extra');
const path = require('path');
const glob = require('fast-glob');
const $RefParser = require('json-schema-ref-parser');
const merge = require('json-schema-merge-allof');
const rmConfig = require('./rmConfig');

// TODO dedupe this! #schemaresolver
const numberingMapping = {
  base: '0-base',
  atoms: '1-atoms',
  molecules: '2-molecules',
  organisms: '3-organisms',
  templates: '4-templates',
  pages: '5-pages',
};

const rmUrlToPathConverter = (schemaUrl) => {
  const urlRegExp = /^http:\/\/frontend\.ruhmesmeile\.com\/([a-z-_]+)\/([a-z-_]+)\/([a-z-_/]+)\.(schema|definitions)\.json(?:.*)$/g;
  const matches = urlRegExp.exec(schemaUrl);
  const schemaPath = glob.sync(
    `${rmConfig.temppath}/patterns/${numberingMapping[matches[2]]}/**/${
      matches[3]
    }.${matches[4]}.json`
  );
  return `${schemaPath[0]}${matches[5] || ''}`;
};

const rmResolver = {
  order: 1,
  canRead: /^http:\/\/frontend\.ruhmesmeile\.com/i,
  read(file) {
    return fs.readFile(rmUrlToPathConverter(file.url));
  },
};

const schemaLoader = async (refParser, schemaPath) =>
  refParser.dereference(schemaPath, { resolve: { rm: rmResolver } });

const dereference = async (schemaPath) => {
  const schema = await schemaLoader(new $RefParser(), schemaPath);
  const dirname = path.dirname(schemaPath);
  const basename = path.basename(schemaPath, '.json');
  const mergedSchema = merge(schema);
  fs.writeJSON(path.join(dirname, `${basename}.dereffed.json`), mergedSchema, {
    spaces: 2,
  });
};

const dereferenceAll = async () => {
  const schemaPaths = await glob(
    `${rmConfig.temppath}/patterns/**/*.(schema|definitions).json`
  );
  schemaPaths.forEach(dereference);
};
dereferenceAll.displayName = 'rm-frontend: dereference json schema';

module.exports = {
  dereferenceAll,
  dereference,
};

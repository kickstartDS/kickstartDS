const fs = require('fs-extra');
const path = require('path');
const glob = require('fast-glob');
const chokidar = require('chokidar');
const $RefParser = require('json-schema-ref-parser');
const merge = require('json-schema-merge-allof');
const { schemaResolver } = require('../schemaResolver');

const schemaLoader = async (refParser, schemaPath) =>
  refParser.dereference(schemaPath, {
    resolve: {
      rm: {
        order: 1,
        ...schemaResolver,
      },
    },
  });

const dereference = async (schemaPath) => {
  const schema = await schemaLoader(new $RefParser(), schemaPath);
  const dirname = path.dirname(schemaPath);
  const basename = path.basename(schemaPath, '.json');
  const mergedSchema = merge(schema);
  fs.writeJSON(path.join(dirname, `${basename}.dereffed.json`), mergedSchema, {
    spaces: 2,
  });
};

(async () => {
  const [, , param] = process.argv;
  const schemaGlob =
    'packages/@rm-frontend/*/lib/**/*.(schema|definitions).json';
  if (param === '--watch') {
    chokidar
      .watch(schemaGlob, { ignoreInitial: true })
      .on('add', dereference)
      .on('change', dereference);
  } else {
    const schemaPaths = await glob(schemaGlob);
    schemaPaths.forEach(dereference);
  }
})();

const fs = require('fs-extra');
const fg = require('fast-glob');
const chokidar = require('chokidar');
const { dirRe } = require('./utils');
const { dereference } = require('./schemaDereference');
const { createTypes } = require('./schemaToTypescript');
const log = require('./log');

const processSchema = async (schemaPath) => {
  const [, dir, base] = schemaPath.match(dirRe);
  const dest = `lib/${dir}`;
  return Promise.all([
    fs.copy(schemaPath, `${dest}/${base}.json`),
    dereference(schemaPath).then((dereffed) =>
      Promise.all([
        fs.outputJson(`${dest}/${base}.dereffed.json`, dereffed, { spaces: 2 }),
        createTypes(dereffed, schemaPath),
      ])
    ),
  ]);
};

const schemaGlob = 'source/**/!(_)*.(schema|definitions).json';

const buildSchema = async () => {
  const schemaPaths = await fg(schemaGlob);
  log('starting schema transform');
  await Promise.all(schemaPaths.map(processSchema));
  log('finished schema transform');
};

const watchSchema = () =>
  new Promise((resolve) => {
    chokidar
      .watch(schemaGlob)
      .on('add', processSchema)
      .on('change', processSchema)
      .on('ready', resolve);
  });

module.exports = {
  buildSchema,
  watchSchema,
};

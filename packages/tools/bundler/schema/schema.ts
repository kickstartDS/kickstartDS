import fs from 'fs-extra';
import fg from 'fast-glob';
import chokidar from 'chokidar';
import log from '../utils/log.js';
import { dirRe } from '../utils/utils.js';
import { dereference } from './schemaDereference.js';
import { createTypes } from './schemaToTypescript.js';
import { createStory } from '../stories/createStory.js';
import { JSONSchema } from 'json-schema-typed/draft-07.js';

const schemaGlob: string =
  'source/**/!(_)*.(schema|definitions|interface).json';

const processSchema = async (schemaPath: string) => {
  const [, dir, base] = schemaPath.match(dirRe) || [];
  const dest = `lib/${dir}`;

  return Promise.all([
    fs.copy(schemaPath, `${dest}/${base}.json`),
    dereference(schemaPath, schemaGlob).then((dereffed: JSONSchema.Object) =>
      Promise.all([
        fs.outputJson(`${dest}/${base}.dereffed.json`, dereffed, { spaces: 2 }),
        createTypes(dereffed.$id, schemaGlob),
        createStory(dereffed, dest),
      ])
    ),
  ]);
};

const buildSchema = async () => {
  const schemaPaths: string[] = await fg(schemaGlob);
  log('starting schema transform');
  await Promise.all(schemaPaths.map(processSchema));
  log('finished schema transform');
};

const watchSchema = () =>
  new Promise<void>((resolve) => {
    chokidar
      .watch(schemaGlob)
      .on('add', processSchema)
      .on('change', processSchema)
      .on('ready', resolve);
  });

export { buildSchema, watchSchema };

/* eslint-disable no-console */
const jsf = require('json-schema-faker');
const schema = require('../packages/components/content/source/2-molecules/visual/visual.schema.json');

jsf.resolve(schema).then((sample) => {
  console.log(sample);
});

#!/usr/bin/env node

process.env.DEBUG = 'kickstartDS:*';
process.env.DEBUG_COLORS =
  process.env.NODE_ENV === 'production' ? undefined : 'true';

const del = require('del');
const { buildBundle, watchBundle } = require('./bundle/bundle');
const { buildSchema, watchSchema } = require('./schema/schema');
const { copy } = require('./stories/copy');

(async () => {
  const [, , param] = process.argv;
  switch (param) {
    case '--schema': {
      return buildSchema();
    }
    case '--watch': {
      await watchSchema();
      return watchBundle();
    }
    default: {
      await del('lib');
      await buildSchema();
      await buildBundle();
      return copy();
    }
  }
})();
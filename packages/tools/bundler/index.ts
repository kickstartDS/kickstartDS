#!/usr/bin/env node

process.env.DEBUG = 'kickstartDS:*';
process.env.DEBUG_COLORS =
  process.env.NODE_ENV === 'production' ? undefined : 'true';

import del from 'del';
import { buildBundle, watchBundle } from './bundle/bundle.js';
import { buildSchema, watchSchema } from './schema/schema.js';
import { copy } from './stories/copy.js';

(async () => {
  const [, , param]: string[] = process.argv;
  switch (param) {
    case '--schema': {
      return buildSchema();
    }
    case '--watch': {
      await watchSchema();
      await watchBundle();
      break;
    }
    default: {
      await del('lib');
      await buildSchema();
      await buildBundle();
      await copy();
      break;
    }
  }
})();

const fs = require('fs-extra');
const glob = require('fast-glob');

const createRootSchema = async () => {
  const schemas = await glob(
    `packages/components/**/*.(schema|definitions).json`
  );

  const rootSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://schema.kickstartds.com/root.schema.json',
    definitions: {},
  };

  await Promise.all(
    schemas.map(async (schema) => {
      const schemaJson = await fs.readJSON(schema);
      const schemaName = schemaJson.$id.split('/').pop().split('.').shift();
      rootSchema.definitions[schemaName] = schemaJson;
    })
  );

  fs.writeJSON('kds-root.schema.json', rootSchema, { spaces: 2 });
};

createRootSchema();

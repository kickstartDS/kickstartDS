import path from 'path';

import {
  getSchemaRegistry,
  processSchemaGlob,
  dereference as schemaDereference,
} from '@kickstartds/jsonschema-utils';

const dereference = async (schemaPath: string, schemaGlob: string) => {
  const ajv = getSchemaRegistry();
  const schemaIds = await processSchemaGlob(schemaGlob, ajv, false);
  const schemaId = schemaIds.find((schemaId) =>
    schemaId.endsWith(path.basename(schemaPath))
  );
  if (!schemaId)
    throw new Error("Couldn't find matching schema id for schema path");

  const dereffedSchemas = await schemaDereference([schemaId], ajv);
  return dereffedSchemas[schemaId];
};

export { dereference };

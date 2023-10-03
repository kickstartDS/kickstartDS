import fs from 'fs-extra';
import fg from 'fast-glob';
import path from 'path';
import { pascalCase } from 'change-case';

import {
  getSchemaModule,
  getSchemaName,
  getSchemaRegistry,
  processSchemaGlob,
} from '@kickstartds/jsonschema-utils';
import { createTypes as createTypings } from '@kickstartds/jsonschema2types';

const renderImportName = (schemaId: string): string =>
  `${pascalCase(getSchemaName(schemaId))}Props`;

const renderImportStatement = (schemaId: string): string =>
  schemaId.includes('schema.kickstartds.com')
    ? `import type { ${pascalCase(
        getSchemaName(schemaId)
      )}Props } from '@kickstartds/${getSchemaModule(
        schemaId
      )}/lib/${getSchemaName(schemaId)}/typing'`
    : `import type { ${pascalCase(
        getSchemaName(schemaId)
      )}Props } from '../${getSchemaName(schemaId)}/${pascalCase(
        getSchemaName(schemaId)
      )}Props'`;

const createTypes = async (schemaId: string, schemaGlob: string) => {
  const schemaPaths: string[] = await fg(schemaGlob);

  const ajv = getSchemaRegistry();
  await processSchemaGlob(schemaGlob, ajv, false);

  const types: Record<string, string> = await createTypings(
    [schemaId],
    renderImportName,
    renderImportStatement,
    ajv
  );

  const schemaPath: string | undefined = schemaPaths.find((schemaPath) =>
    schemaPath.endsWith(schemaId.split('/').pop() || 'NO MATCH')
  );
  if (!schemaPath)
    throw new Error("Couldn't find matching schema path for schema $id");
  const base = path.basename(schemaPath, '.json');
  const dir = path.dirname(schemaPath);

  return fs.writeFile(
    `${dir}/${pascalCase(base.replace(/\.(schema|definitions)$/, ''))}Props.ts`,
    types[schemaId]
  );
};

export { createTypes };

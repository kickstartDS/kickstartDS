const { capitalCase, pascalCase } = require('change-case');
const fs = require('fs-extra');

const template = ({
  moduleDir,
  componentName,
  componentPascalcased,
  schema,
  loadComponentTokens,
}) => `
import type { Meta, StoryObj } from '@storybook/react';
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import { ${componentPascalcased} } from './index.js';
${
  loadComponentTokens
    ? `import cssprops from './${componentName}-tokens.json';`
    : ''
}

const schema = ${JSON.stringify(schema, null, 2)};

const meta: Meta<typeof ${componentPascalcased}> = {
  title: '${capitalCase(moduleDir)}/${capitalCase(schema.title)}',
  component: ${componentPascalcased},
  excludeStories: ['Template'],
  parameters: {
    ${loadComponentTokens ? 'cssprops,' : ''}
  },
  ...getArgsShared(schema),
};
export default meta;
type Story = StoryObj<typeof ${componentPascalcased}>;

export const Default: Story = {};
`;

const createStory = (schema, dest) => {
  const [, moduleDir, fileName] = schema.$id.match(/^.*\/(.+)\/(.*)$/);
  const [componentName, type] = fileName.split('.');
  const hasComponentTokens = fs.existsSync(
    `${dest}/${componentName}-tokens.json`
  );
  if (type === 'schema' && schema.properties) {
    return Promise.all([
      fs.outputFile(
        `${dest}/${componentName}.stories.ts`,
        template({
          moduleDir,
          componentName,
          componentPascalcased: pascalCase(componentName),
          schema,
          hasComponentTokens,
        })
      ),
    ]);
  }
};

module.exports = { createStory };

const { capitalCase, pascalCase } = require('change-case');
const fs = require('fs-extra');

const template = ({
  moduleDir,
  componentName,
  componentPascalcased,
  schema,
}) => `
import { jsx } from 'react/jsx-runtime';
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import { ${componentPascalcased} } from './index.js';
import cssprops from './${componentName}-tokens.json';

${componentPascalcased}.displayName = '${componentPascalcased}';
const schema = ${JSON.stringify(schema, null, 2)};
export const Template = (args) => /*#__PURE__*/jsx(${componentPascalcased}, args);

export default {
  title: '${capitalCase(moduleDir)}/${capitalCase(schema.title)}',
  component: ${componentPascalcased},
  excludeStories: ['Template'],
  parameters: {
    cssprops,
  },
  ...getArgsShared(schema),
};

export const Default = Template.bind({});
`;

const createStory = (schema, dest) => {
  const [, moduleDir, fileName] = schema.$id.match(/^.*\/(.+)\/(.*)$/);
  const [componentName, type] = fileName.split('.');
  if (type === 'schema' && schema.properties) {
    return Promise.all([
      fs.outputFile(
        `${dest}/${componentName}.stories.js`,
        template({
          moduleDir,
          componentName,
          componentPascalcased: pascalCase(componentName),
          schema,
        })
      ),
      fs.outputJSON(`${dest}/${componentName}-tokens.json`, {}),
    ]);
  }
};

module.exports = { createStory };

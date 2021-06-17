const { capitalCase, pascalCase } = require('change-case');
const fs = require('fs-extra');
const { getArgsShared } = require('./storyUtils');

const template = ({
  moduleDir,
  componentPascalcased,
  schema,
  argTypes,
  defaultArgs,
}) => `
import { jsx } from 'react/jsx-runtime';
import { ${componentPascalcased} } from './index.js';

${componentPascalcased}.displayName = '${componentPascalcased}';
export const Template = (args) => /*#__PURE__*/jsx(${componentPascalcased}, args);

export default {
  title: '${capitalCase(moduleDir)}/${capitalCase(schema.title)}',
  component: ${componentPascalcased},
  argTypes: ${JSON.stringify(argTypes, null, 2)},
  args: ${JSON.stringify(defaultArgs, null, 2)},
  excludeStories: ['Template'],
};

export const Default = Template.bind({});
`;

const createStory = (schema, dest) => {
  const [, moduleDir, fileName] = schema.$id.match(/^.*\/(.+)\/.*\/(.*)$/);
  const [componentName, type] = fileName.split('.');
  if (type === 'schema' && schema.properties) {
    return fs.outputFile(
      `${dest}/${componentName}.stories.js`,
      template({
        moduleDir,
        componentPascalcased: pascalCase(componentName),
        schema,
        ...getArgsShared(schema.properties),
      })
    );
  }
};

module.exports = { createStory };

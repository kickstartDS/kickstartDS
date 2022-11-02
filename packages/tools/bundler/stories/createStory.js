const { capitalCase, pascalCase } = require('change-case');
const fs = require('fs-extra');

const template = ({
  moduleDir,
  componentName,
  componentPascalcased,
  schema,
  loadComponentTokens,
}) => `
import { jsx } from 'react/jsx-runtime';
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import { ${componentPascalcased} } from './index.js';
${
  loadComponentTokens
    ? `import cssprops from './${componentName}-tokens.json';`
    : ''
}

${componentPascalcased}.displayName = '${componentPascalcased}';
const schema = ${JSON.stringify(schema, null, 2)};
export const Template = (args) => /*#__PURE__*/jsx(${componentPascalcased}, args);

export default {
  title: '${capitalCase(moduleDir)}/${capitalCase(schema.title)}',
  component: ${componentPascalcased},
  excludeStories: ['Template'],
  parameters: {
    ${loadComponentTokens ? 'cssprops,' : ''}
  },
  ...getArgsShared(schema),
};

export const Default = Template.bind({});
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
        `${dest}/${componentName}.stories.js`,
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

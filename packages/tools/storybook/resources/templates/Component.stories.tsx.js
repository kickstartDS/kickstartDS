const { capitalCase } = require('change-case');

module.exports = ({
  moduleDir,
  componentDir,
  componentLowercased,
  componentPascalcased,
}) => `
import { Story, Meta } from '@storybook/react';
import { capitalCase } from 'change-case';
import { getArgsShared, unpack } from '../../../../components/core/lib/storybook/helpers.js';
import schema from '../../../../components/${moduleDir}/lib/${componentDir}/${componentLowercased}.schema.dereffed.json';
import { ${componentPascalcased} } from '../../../../components/${moduleDir}/lib/${componentDir}';

const { argTypes, defaultArgs } = getArgsShared(schema.properties);
const Template: Story = (args) => <${componentPascalcased} {...args} />;

export default {
  title: '${capitalCase(moduleDir)}/' + capitalCase(schema.title),
  component: ${componentPascalcased},
  argTypes,
} as Meta;

export const Default = Template.bind({});
Default.args = defaultArgs;
`;

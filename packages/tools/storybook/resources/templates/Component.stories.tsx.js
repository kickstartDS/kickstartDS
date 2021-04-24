const { capitalCase } = require('change-case');

module.exports = ({
  moduleDir,
  componentDir,
  componentLowercased,
  componentPascalcased,
}) => `
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { capitalCase } from 'change-case';
import * as storyHelpers from '../../source/story-helpers';
import schema from '../../../../components/${moduleDir}/lib/${componentDir}/${componentLowercased}.schema.dereffed.json';
import { ${componentPascalcased} } from '../../../../components/${moduleDir}/lib/${componentDir}';

const Template: Story = (args) => <${componentPascalcased} {...storyHelpers.unpack(args)} />;

export default {
  title: '${capitalCase(moduleDir)}/' + capitalCase(schema.title),
  component: ${componentPascalcased},
  argTypes: {
    ...storyHelpers.getArgTypes(schema.properties),
    render: {
      table: { disable: true },
      control: { disable: true },
    },
  },
} as Meta;

export const Default = Template.bind({});
Default.args = storyHelpers.getArgs(schema.properties);
`;

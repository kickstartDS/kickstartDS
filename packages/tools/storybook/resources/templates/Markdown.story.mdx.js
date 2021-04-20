module.exports = ({ title }) => `
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="${title}" />

{{ content }}
`;

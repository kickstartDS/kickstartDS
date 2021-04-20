module.exports = ({ title, content }) => `
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="${title}" />

${content}
`;

module.exports = ({ title, content }) => `
import { Meta } from '@storybook/addon-docs';

<Meta title="${title}" />

${content}
`;

const del = require('del');

module.exports = () => del('packages/tools/storybook/tmp');

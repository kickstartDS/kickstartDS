const del = require('del');

module.exports = () => del('packages/@rm-frontend/storybook/tmp');

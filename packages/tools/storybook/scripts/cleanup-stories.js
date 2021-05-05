const del = require('del');

module.exports = () => del(['tmp', 'storybook-static']);

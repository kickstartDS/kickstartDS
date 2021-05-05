/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const template = require('../resources/templates/preview-head.html');

module.exports = () => fs.writeFile('.storybook/preview-head.html', template());

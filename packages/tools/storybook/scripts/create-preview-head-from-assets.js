/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const path = require('path');
const template = require('../resources/templates/preview-head.html');

module.exports = () => {
  const storybookRoot = path.resolve(__dirname, '..');
  const options = {};
  return fs.writeFile(
    `${storybookRoot}/.storybook/preview-head.html`,
    template(options)
  );
};

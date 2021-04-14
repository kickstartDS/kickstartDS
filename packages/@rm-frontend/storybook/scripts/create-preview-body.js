/* eslint-disable global-require */
const fs = require('fs-extra');
const path = require('path');

module.exports = async () => {
  const rmConfig = require('@rm-frontend/build-tools/tasks/rmConfig');
  const storybookRoot = path.resolve(__dirname, '..');
  return fs.copy(
    `${rmConfig.temppath}/patterns/1-atoms/icon/icon-sprite.hbs`,
    `${storybookRoot}/.storybook/preview-body.html`
  );
};

const storybookVariablesFormat = require('./storybook/tokens');
const storybookIconsFormat = require('./storybook/icons');
const htmlIconSpriteFormat = require('./html/icon-sprite');
const jsxIconSpriteFormat = require('./jsx/icon-sprite');
const cssKdsVariablesFormat = require('./css/kds-variables');

module.exports = {
  [storybookVariablesFormat.name]: storybookVariablesFormat.formatter,
  [storybookIconsFormat.name]: storybookIconsFormat.formatter,
  [htmlIconSpriteFormat.name]: htmlIconSpriteFormat.formatter,
  [jsxIconSpriteFormat.name]: jsxIconSpriteFormat.formatter,
  [cssKdsVariablesFormat.name]: cssKdsVariablesFormat.formatter,
};

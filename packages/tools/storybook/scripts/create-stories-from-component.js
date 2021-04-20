/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const { pascalCase } = require('change-case');
const template = require('../resources/templates/Component.stories.tsx');

const templateStory = (component, componentDir, moduleDir) => {
  const componentLowercased = component.toLowerCase();
  const componentPascalcased = pascalCase(component);

  const options = {
    componentDir,
    componentLowercased,
    componentPascalcased,
    moduleDir,
  };

  return fs.outputFile(
    `packages/tools/storybook/tmp/${moduleDir}/${componentPascalcased}.stories.tsx`,
    template(options)
  );
};

module.exports = async () => {
  const exportsAbsolute = await glob('packages/components/*/lib/exports.json');
  const exportsRelative = exportsAbsolute.map((e) =>
    path.relative(__dirname, e)
  );
  exportsRelative.forEach(async (e) => {
    const [, , , , mod] = e.split('/');
    const exports = require(e);
    const exportsKeys = Object.keys(exports).reduce((prev, curr) => {
      if (/^[\w-]+$/.test(curr)) {
        prev.push(curr);
      }
      return prev;
    }, []);
    if (!exportsKeys.length) return;
    const exportKeysGlob =
      exportsKeys.length > 1 ? `{${exportsKeys.join(',')}}` : exportsKeys[0];
    const schemaPaths = await glob(
      `packages/components/${mod}/lib/${exportKeysGlob}/[!_]*.schema.dereffed.json`
    );
    schemaPaths.forEach(async (schemaPath) => {
      const [, componentDir, component] = schemaPath.match(
        /.*\/(.*)\/([0-9a-z-]+)\.schema\.dereffed\.json/
      );
      await templateStory(component, componentDir, mod);
    });
  });
};

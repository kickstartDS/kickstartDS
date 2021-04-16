/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const util = require('util');
const nunjucks = require('nunjucks');
const { pascalCase } = require('change-case');

const templates = path.resolve(__dirname, '..', 'resources', 'templates');
nunjucks.configure(templates);
const nunjucksEnvironment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(templates)
);
const nunjucksRenderPromise = util.promisify(nunjucksEnvironment.render);
const render = nunjucksRenderPromise.bind(nunjucksEnvironment);

const templateStory = async (component, componentDir, mod, dir) => {
  const componentLowercased = component.toLowerCase();
  const componentPascalcased = pascalCase(component);

  const options = {
    componentDir,
    componentLowercased,
    componentPascalcased,
    module: mod,
    dir,
  };

  return render('Component.stories.tsx.njk', options)
    .then((content) =>
      fs.outputFile(
        `packages/tools/storybook/tmp/${mod}/${componentPascalcased}.stories.tsx`,
        content
      )
    )
    .catch((err) => {
      console.log('Error: ', JSON.stringify(err));
    });
};

module.exports = async () => {
  const exportsAbsolute = await glob(
    'packages/{@rm-frontend,components}/*/lib/exports.json'
  );
  const exportsRelative = exportsAbsolute.map((e) =>
    path.relative(__dirname, e)
  );
  exportsRelative.forEach(async (e) => {
    const [, , , dir, mod] = e.split('/');
    const exports = require(e);
    const exportsKeys = Object.keys(exports);
    const schemaPaths = await glob(
      `packages/${dir}/${mod}/lib/{${exportsKeys.join(
        ','
      )}}/[!_]*.schema.dereffed.json`
    );
    schemaPaths.forEach(async (schemaPath) => {
      const [, componentDir, component] = schemaPath.match(
        /.*\/(.*)\/([0-9a-z-]+)\.schema\.dereffed\.json/
      );
      await templateStory(component, componentDir, mod, dir);
    });
  });
};

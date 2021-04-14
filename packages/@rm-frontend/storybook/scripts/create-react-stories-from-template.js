/* eslint-disable global-require, no-continue, no-prototype-builtins */
/* eslint-disable no-restricted-syntax, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const util = require('util');
const nunjucks = require('nunjucks');

const toPascalCase = (str) =>
  str
    .replace(/-/g, ' ')
    .replace(
      /\w\S*/g,
      (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
    )
    .replace(/ /g, '');

const templates = path.resolve(__dirname, '..', 'resources', 'templates');
nunjucks.configure(templates);
const nunjucksEnvironment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(templates)
);
const nunjucksRenderPromise = util.promisify(nunjucksEnvironment.render);
const render = nunjucksRenderPromise.bind(nunjucksEnvironment);

module.exports = async () => {
  const rmConfig = require('@rm-frontend/build-tools/tasks/rmConfig');

  const templateStory = async (component, componentPath) => {
    const componentLowercased = component.toLowerCase();
    const componentPascalcased = toPascalCase(component);

    if (
      !(await fs.pathExists(
        `${componentPath}/${componentPascalcased}Component.tsx`
      ))
    ) {
      return undefined;
    }

    const options = {
      componentLowercased,
      componentPascalcased,
      imageAssetPathPrefix: rmConfig.config.paths.publicImages,
    };

    return render('ReactComponent.stories.tsx.njk', options)
      .then((content) =>
        fs.writeFile(
          `${componentPath}/${componentPascalcased}React.stories.tsx`,
          content
        )
      )
      .catch((err) => {
        console.log('Error: ', JSON.stringify(err));
      });
  };

  const schemaPaths = await glob(
    `${rmConfig.temppath}/patterns/**/[!_]*.schema.dereffed.json`
  );

  schemaPaths.forEach(async (schemaPath) => {
    const [, componentPath, component] = schemaPath.match(
      /(.*)\/([0-9a-z-]+)\.schema\.dereffed\.json/
    );
    await templateStory(component, componentPath);
  });
};

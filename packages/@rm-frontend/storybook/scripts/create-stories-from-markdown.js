/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const util = require('util');
const nunjucks = require('nunjucks');
const { capitalCase } = require('change-case');

const templates = path.resolve(__dirname, '..', 'resources', 'templates');
nunjucks.configure(templates);
const nunjucksEnvironment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(templates)
);
const nunjucksRenderPromise = util.promisify(nunjucksEnvironment.render);
const render = nunjucksRenderPromise.bind(nunjucksEnvironment);

const templateStory = async (mod, name, mdContent) => {
  const options = {
    title: `${capitalCase(mod)}/${capitalCase(name)}`,
    content: mdContent,
  };

  return render('Markdown.story.mdx.njk', options)
    .then((content) =>
      fs.outputFile(
        `packages/@rm-frontend/storybook/tmp/${mod}/${name}.story.mdx`,
        content
      )
    )
    .catch((err) => {
      console.log(err);
    });
};

module.exports = async () => {
  const modules = (await glob('packages/@rm-frontend/*/lib/exports.json')).map(
    (mod) => mod.split('/')[2]
  );
  const filePaths = await glob(
    `packages/@rm-frontend/{${modules.join(',')}}/*.md`
  );
  filePaths.forEach(async (filePath) => {
    const [, mod, name] = filePath.match(/.*\/(.*)\/(\w+)\.md/);
    const content = await fs.readFile(filePath);
    await templateStory(mod, name, content);
  });
};

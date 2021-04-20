/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const { capitalCase } = require('change-case');
const template = require('../resources/templates/Markdown.story.mdx');

const templateStory = (mod, name, mdContent) => {
  const options = {
    title: `${capitalCase(mod)}/${capitalCase(name)}`,
    content: mdContent,
  };

  return fs.outputFile(
    `packages/tools/storybook/tmp/${mod}/${name}.story.mdx`,
    template(options)
  );
};

module.exports = async () => {
  const modules = (await glob('packages/components/*/lib/exports.json')).map(
    (mod) => mod.split('/')[2]
  );
  const filePaths = await glob(
    `packages/components/{${modules.join(',')}}/*.md`
  );
  filePaths.forEach(async (filePath) => {
    const [, mod, name] = filePath.match(/.*\/(.*)\/(\w+)\.md/);
    const content = await fs.readFile(filePath);
    await templateStory(mod, name, content);
  });
};

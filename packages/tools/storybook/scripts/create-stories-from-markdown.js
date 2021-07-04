/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const { capitalCase } = require('change-case');
const { toArray } = require('react-emoji-render');
const template = require('../resources/templates/Markdown.story.mdx');
const { root } = require('./utils');

const parseEmojis = (value) => {
  const emojisArray = toArray(value);

  // toArray outputs React elements for emojis and strings for other
  const newValue = emojisArray.reduce((previous, current) => {
    if (typeof current === 'string') {
      return previous + current;
    }
    return previous + current.props.children;
  }, '');

  return newValue;
};

const templateStory = (mod, name, mdContent) => {
  const options = {
    title: `${capitalCase(mod)}/${capitalCase(name)}`,
    content: parseEmojis(
      mdContent
        .toString()
        // add linebreak between `<a>`-tag and headline
        .replace(/<\/a>(\r\n|\r|\n)#\s/g, '</a>\n\n# ')
    ),
  };

  return fs.outputFile(`tmp/${mod}/${name}.story.mdx`, template(options));
};

module.exports = async (kdsModules) => {
  const filePaths = await glob(`packages/components/${kdsModules}/**/*.md`, {
    cwd: root,
    absolute: true,
    ignore: 'packages/components/*/node_modules',
  });
  filePaths.forEach(async (filePath) => {
    const [, mod, name] = filePath.match(
      /components\/(\w+)\/(?:.*\/)*(\w+)\.md$/
    );
    const content = await fs.readFile(filePath);
    await templateStory(mod, name, content);
  });
};

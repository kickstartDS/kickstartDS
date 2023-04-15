/* eslint-disable global-require, import/no-dynamic-require */
const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const { capitalCase } = require('change-case');
const { toArray } = require('react-emoji-render');
const { root } = require('../utils/utils');

const template = ({ title, content }) => `
import { Meta } from '@storybook/blocks';

<Meta title="${title}" />

${content}
`;

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

module.exports = async (modPath, mod) => {
  const filePaths = await glob(`${modPath}/**/*.md`, {
    cwd: root,
    absolute: true,
    ignore: '**/node_modules',
  });
  filePaths.forEach(async (filePath) => {
    const content = await fs.readFile(filePath);
    const name = path.basename(filePath, '.md');
    const options = {
      title: `${capitalCase(mod)}/${capitalCase(name)}`,
      content: parseEmojis(
        content
          .toString()
          // add linebreak between `<a>`-tag and headline
          .replace(/<\/a>(\r\n|\r|\n)#\s/g, '</a>\n\n# ')
      ),
    };
    return fs.outputFile(
      `${modPath}/storybook-tmp/${name}.mdx`,
      template(options)
    );
  });
};

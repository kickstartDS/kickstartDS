const path = require('path');
const fs = require('fs-extra');
const svgstore = require('svgstore');
const fg = require('fast-glob');
const del = require('del');
const { root } = require('./utils');

const createIconSprite = async () => {
  const [filePaths] = await Promise.all([
    fg('legacy-instance/icons/*.svg', {
      cwd: root,
      absolute: true,
    }),
    del('.storybook/icons.html'),
  ]);
  const sprite = svgstore({
    svgAttrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      hidden: '',
      height: '0',
      width: '0',
    },
  });
  await Promise.all(
    filePaths.map(async (filePath) => {
      const file = await fs.readFile(filePath);
      sprite.add(`icon-${path.basename(filePath, '.svg')}`, file);
      return fs.appendFile('.storybook/icons.html', file);
    })
  );
  return sprite.toString({ inline: true });
};

module.exports = async () => {
  const body = await createIconSprite();
  return fs.writeFile(`.storybook/preview-body.html`, body);
};

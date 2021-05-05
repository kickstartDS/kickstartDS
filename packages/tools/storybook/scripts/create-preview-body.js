const path = require('path');
const fs = require('fs-extra');
const svgstore = require('svgstore');
const fg = require('fast-glob');
const { root } = require('./utils');

const createIconSprite = async () => {
  const filePaths = await fg('legacy-instance/icons/*.svg', {
    cwd: root,
    absolute: true,
  });
  const files = await Promise.all(
    filePaths.map(async (filePath) => [
      `icon-${path.basename(filePath, '.svg')}`,
      await fs.readFile(filePath),
    ])
  );
  const sprite = svgstore({
    svgAttrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      hidden: '',
      height: '0',
      width: '0',
    },
  });
  files.forEach((file) => sprite.add(...file));
  return sprite.toString({ inline: true });
};

module.exports = async () => {
  const body = await createIconSprite();
  return fs.writeFile(`.storybook/preview-body.html`, body);
};

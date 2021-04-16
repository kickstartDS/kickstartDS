const fs = require('fs-extra');
const path = require('path');
const fg = require('fast-glob');
const sass = require('sass');
const chokidar = require('chokidar');
const { dirRe } = require('./utils');

const cwd = process.cwd();
const includePaths = [
  `../../../packages`,
  `../../../node_modules`,
  `../../../packages/@rm-frontend/instance/source`,
];

const dependencies = {};

const compile = async (file) => {
  try {
    const { css, stats } = sass.renderSync({ file, includePaths });
    dependencies[path.relative(cwd, stats.entry)] = stats.includedFiles.reduce(
      (prev, curr) => {
        if (!curr.includes('/node_modules/')) {
          prev.push(path.relative(cwd, curr));
        }
        return prev;
      },
      []
    );
    const [, dir, base] = stats.entry.match(dirRe);
    const dest = path.join('lib', dir, `${base}.css`);
    return fs.outputFile(dest, css);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = async function () {
  const scssPaths = await fg('source/*/**/!(_)*.scss');
  await Promise.all(scssPaths.map(compile));
  const [, , param] = process.argv;
  if (param === '--watch') {
    chokidar
      .watch('source/*/**/*.scss', { ignoreInitial: true })
      .on('all', (event, file) => {
        // eslint-disable-next-line no-console
        console.log(`ℹ︎ ${event}: ${file}`);
        const keys = Object.keys(dependencies);
        if (keys.includes(file)) {
          delete dependencies[file];
          if (!event.startsWith('unlink')) {
            compile(file);
          }
        } else if (!path.basename(file, '.scss').startsWith('_')) {
          compile(file);
        } else {
          Object.entries(dependencies).forEach(([entry, deps]) => {
            if (deps.includes(file)) {
              compile(entry);
            }
          });
        }
      });
  }
};

const { promises: fs } = require('fs');
const path = require('path');
const fg = require('fast-glob');
const sass = require('sass');
const chokidar = require('chokidar');
const functions = require('../packages/@rm-frontend/build-tools/tasks/sassFunctions');

const cwd = process.cwd();
const includePaths = [
  `./packages`,
  `./node_modules`,
  `./packages/@rm-frontend/instance/source`,
];

const dependencies = {};

const compile = async (scssPath) => {
  try {
    const { css, stats } = sass.renderSync({
      file: scssPath,
      includePaths,
      functions,
    });
    dependencies[path.relative(cwd, stats.entry)] = stats.includedFiles.reduce(
      (prev, curr) => {
        if (!curr.includes('/node_modules/')) {
          prev.push(path.relative(cwd, curr));
        }
        return prev;
      },
      []
    );
    const dest = stats.entry.replace(
      /(.*)(\/source\/)(.*)(\.scss)$/,
      '$1/lib/source/$3.css'
    );
    return fs.writeFile(dest, css);
  } catch (err) {
    throw new Error(err);
  }
};

(async () => {
  const scssPaths = await fg('./packages/*/*/source/*/**/!(_)*.scss');
  await Promise.all(scssPaths.map(compile));
  const [, , param] = process.argv;
  if (param === '--watch') {
    chokidar
      .watch('./packages/*/*/source/*/**/*.scss', { ignoreInitial: true })
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
})();

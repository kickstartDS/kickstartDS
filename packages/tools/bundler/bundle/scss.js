const fs = require('fs-extra');
const path = require('path');
const { pathToFileURL } = require('url');
const sass = require('sass');
const chokidar = require('chokidar');
const postcss = require('postcss');
const { root, dirRe } = require('../utils/utils');
const postcssPlugins = require('./postcssPlugins');
const log = require('../utils/log');
const { createTokens } = require('./customPropertyExtract');

const cwd = process.cwd();
const loadPaths = [`${root}/packages/components`, `${root}/node_modules`];

const search = '@kickstartds/';
const searchLength = search.length;
const importers = [
  {
    findFileUrl(url) {
      if (url.indexOf(search) === 0) {
        return pathToFileURL(
          `${root}/packages/components/${url.slice(searchLength)}`
        );
      }
    },
  },
];

const dependencies = {};

const compile = async (file) => {
  const { css, loadedUrls } = sass.compile(file, {
    loadPaths,
    importers,
    quietDeps: true,
  });

  dependencies[path.relative(cwd, file)] = loadedUrls.reduce((prev, curr) => {
    if (!curr.pathname.includes('/node_modules/')) {
      prev.push(path.relative(cwd, decodeURI(curr.pathname)));
    }
    return prev;
  }, []);
  const [, dir, base] = file.match(dirRe);
  const dest = `lib/${dir}/${base}.css`;
  const result = await postcss(postcssPlugins).process(css, {
    from: file,
    to: dest,
  });
  await Promise.all([
    createTokens(dest, result.css),
    fs.outputFile(dest, result.css),
  ]);
  return `${dir}/${base}.css`;
};

const compileScss = async (scssPaths) => {
  log('starting scss transform');
  const outFiles = await Promise.all(scssPaths.map(compile));
  log('finished scss transform');
  return outFiles.map((f) => [f, []]);
};

const watchScss = async (scssPaths) => {
  await compileScss(scssPaths);
  chokidar
    .watch('source/*/**/*.scss', { ignoreInitial: true })
    .on('all', (event, file) => {
      log(`ℹ︎ ${event}: ${file}`);
      const entryFiles = Object.keys(dependencies);
      if (entryFiles.includes(file)) {
        delete dependencies[file];
        if (!event.startsWith('unlink')) {
          compile(file);
        }
      } else {
        entryFiles.forEach((entry) => {
          if (dependencies[entry].includes(file)) {
            compile(entry);
          }
        });
      }
    });
};

module.exports = { compileScss, watchScss };

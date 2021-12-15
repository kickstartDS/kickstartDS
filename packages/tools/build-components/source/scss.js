const fs = require('fs-extra');
const path = require('path');
const { pathToFileURL } = require('url');
const sass = require('sass');
// const chokidar = require('chokidar');
const postcss = require('postcss');
const { root, dirRe } = require('./utils');
const postcssPlugins = require('./postcssPlugins');
const log = require('./log');
const { createTokens } = require('./customPropertyExtract');

const cwd = process.cwd();
const loadPaths = [
  `${root}/packages/components`,
  `${root}/node_modules`,
  `${root}/legacy-instance`,
];

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
      prev.push(path.relative(cwd, curr.pathname));
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

module.exports = async function (scssPaths, watch) {
  log('starting scss transform');
  const outFiles = await Promise.all(scssPaths.map(compile));
  log('finished scss transform');
  // const [, , param] = process.argv;
  // if (watch || param === '--watch') {
  //   chokidar
  //     .watch('source/*/**/*.scss', { ignoreInitial: true })
  //     .on('all', (event, file) => {
  //       console.log(`ℹ︎ ${event}: ${file}`);
  //       const keys = Object.keys(dependencies);
  //       if (keys.includes(file)) {
  //         delete dependencies[file];
  //         if (!event.startsWith('unlink')) {
  //           compile(file);
  //         }
  //       } else if (!path.basename(file, '.scss').startsWith('_')) {
  //         compile(file);
  //       } else {
  //         Object.entries(dependencies).forEach(([entry, deps]) => {
  //           if (deps.includes(file)) {
  //             compile(entry);
  //           }
  //         });
  //       }
  //     });
  // }
  return outFiles.map((f) => [f, []]);
};

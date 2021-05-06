const fs = require('fs-extra');
const path = require('path');
const sass = require('sass');
// const chokidar = require('chokidar');
const postcss = require('postcss');
const { root, dirRe } = require('./utils');
const postcssPlugins = require('./postcssPlugins');
const log = require('./log');

const cwd = process.cwd();
const includePaths = [
  `${root}/packages/components`,
  `${root}/node_modules`,
  `${root}/legacy-instance`,
];

const search = '@kickstartds/';
const searchLength = search.length;
const importer = (url) => {
  if (url.indexOf(search) === 0) {
    return {
      file: url.slice(searchLength),
    };
  }
};

const dependencies = {};

const compile = async (file) => {
  try {
    const { css, stats } = sass.renderSync({ file, includePaths, importer });
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
    const dest = `lib/${dir}/${base}.css`;
    const result = await postcss(postcssPlugins).process(css, {
      from: file,
      to: dest,
    });
    await fs.outputFile(dest, result.css);
    return `${dir}/${base}.css`;
  } catch (err) {
    throw new Error(err);
  }
};

const finalBundle = async (cssPaths) => {
  log('starting final css bundle');
  const files = await Promise.all(cssPaths.map((p) => fs.readFile(`lib/${p}`)));
  const css = Buffer.concat(files)
    .toString()
    .replace(/@charset "UTF-8";/g, '');
  await fs.writeFile('lib/bundle.css', css);
  log('finished final css bundle');
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
  finalBundle(outFiles);
  return outFiles.map((f) => [f, []]);
};

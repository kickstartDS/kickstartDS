import fs from 'fs-extra';
import path from 'path';
import { pathToFileURL } from 'url';
import * as sass from 'sass';
import chokidar from 'chokidar';
import postcss from 'postcss';
import postcssPlugins from './postcssPlugins.js';
import log from '../utils/log.js';
import { root, dirRe } from '../utils/utils.js';
import { createTokens } from './customPropertyExtract.js';

const cwd = process.cwd();
const loadPaths = [`${root}/node_modules`];

const search = '@kickstartds/';
const searchLength = search.length;
const importers = [
  {
    findFileUrl(url: string) {
      if (url.indexOf(search) === 0) {
        return pathToFileURL(
          `${root}/packages/components/${url.slice(searchLength)}`
        );
      }
    },
  },
];

const dependencies: Record<string, string[]> = {};

const compile = async (file: string) => {
  const { css, loadedUrls } = sass.compile(file, {
    loadPaths,
    importers,
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

const compileScss = async (scssPaths: string[]) => {
  log('starting scss transform');
  const outFiles = await Promise.all(scssPaths.map(compile));
  log('finished scss transform');
  return outFiles.map((f) => [f, []]);
};

const watchScss = async (scssPaths: string[]) => {
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

export { compileScss, watchScss };

const path = require('path');
const fg = require('fast-glob');
const fs = require('fs-extra');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const externals = require('rollup-plugin-node-externals');
const ts = require('@wessberg/rollup-plugin-ts');
const { dirRe } = require('./utils');

module.exports = async function () {
  const files = await fg('source/**/index.ts');
  const input = files.reduce((prev, curr) => {
    const [, entry] = curr.match(dirRe);
    return {
      ...prev,
      [entry]: curr,
    };
  }, {});

  const inputOptions = {
    input,
    external: [/\.scss$/],
    plugins: [
      json(),
      externals({
        deps: true,
        exclude: /^@rm-frontend\/[a-z-]+\/source\//,
      }),
      ts({
        tsconfig: {
          resolveJsonModule: true,
          jsx: 'react-jsx',
          esModuleInterop: true,
          declaration: true,
          target: 'ES6',
          moduleResolution: 'node',
          allowJs: true,
        },
      }),
    ],
  };
  const outputOptions = {
    dir: 'lib',
    format: 'es',
    chunkFileNames: '_shared/[name]-[hash].js',
    entryFileNames(chunkInfo) {
      return `${chunkInfo.name.replace('_virtual_', '')}/index.js`;
    },
    paths(id) {
      if (path.extname(id) === '.scss') {
        const [, dir, base] = id.match(dirRe);
        return path.join(dir, `${base}.css`);
      }
      return id;
    },
  };

  try {
    const bundle = await rollup.rollup(inputOptions);
    const { output } = await bundle.write(outputOptions);
    await bundle.close();

    const exports = output.reduce((prev, { isEntry, fileName, exports: e }) => {
      if (isEntry) {
        const [dir] = fileName.split('/');
        prev[dir] = e;
      }
      return prev;
    }, {});
    await fs.writeJSON('lib/exports.json', exports, { spaces: 2 });

    return output;
  } catch (e) {
    console.error(e);
  }
};

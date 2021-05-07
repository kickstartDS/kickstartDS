const fs = require('fs-extra');
const fg = require('fast-glob');
const { getPackages } = require('@lerna/project');
const { toposort } = require('@lerna/query-graph');
const del = require('del');
const esbuild = require('esbuild');
const { root } = require('./utils');
const scss = require('./scss');

const buildJs = (entryPoints, corePath) =>
  esbuild.build({
    entryPoints,
    bundle: true,
    splitting: false,
    format: 'esm',
    write: true,
    outfile: `${corePath}/lib/bundle.js`,
    logLevel: 'error',
    minify: true,
  });

(async () => {
  try {
    const allPackages = await getPackages(root);
    const componentPackages = allPackages.filter(
      (pkg) => pkg.location.indexOf('packages/component') !== -1
    );
    const sortedPackages = toposort(componentPackages);
    let corePath;

    const [cssEntries, jsEntries] = await sortedPackages.reduce(
      async (prevPromise, pkg) => {
        if (pkg.name === '@kickstartds/core') {
          corePath = pkg.location;
        }
        let [cssEntry, jsEntry] = await prevPromise;
        const [expPath] = await fg(`${pkg.location}/lib/exports.json`);
        const exp = await fs.readJSON(expPath);
        Object.keys(exp).forEach((key) => {
          if (key.endsWith('.css')) {
            cssEntry += `@use '${pkg.name}/lib/${key}' as *;\n`;
          } else if (
            key.endsWith('.js') &&
            key !== 'index.js' &&
            pkg.name !== '@kickstartds/core'
          ) {
            jsEntry += `import '${pkg.name}/lib/${key}';\n`;
          }
        });
        return [cssEntry, jsEntry];
      },
      ['', '']
    );

    const tmpScssPath = `lib/bundle/tmp.scss`;
    const tmpJsPath = `lib/bundle/tmp.js`;
    await Promise.all([
      fs.outputFile(tmpScssPath, cssEntries),
      fs.outputFile(tmpJsPath, jsEntries),
    ]);

    const [, [[cssPath]]] = await Promise.all([
      buildJs([tmpJsPath], corePath),
      scss([tmpScssPath]),
    ]);
    await fs.move(`lib/${cssPath}`, `${corePath}/lib/bundle.css`, {
      overwrite: true,
    });
    await del('lib');
  } catch (err) {
    console.error('ouch', err);
    process.exit(1);
  }
})();

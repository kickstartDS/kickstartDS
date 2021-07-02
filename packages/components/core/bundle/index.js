/* eslint-disable no-console */
const fs = require('fs-extra');
const del = require('del');
const esbuild = require('esbuild');
const sass = require('sass');
const fg = require('fast-glob');
const { DepGraph } = require('dependency-graph');

const [, , outdir = '.'] = process.argv;
const graph = new DepGraph();

const bundleJs = (entryPoints) =>
  esbuild.build({
    entryPoints,
    bundle: true,
    splitting: false,
    format: 'esm',
    write: true,
    outfile: `${outdir}/index.js`,
    logLevel: 'error',
    minify: true,
  });

const bundleCss = async (file) => {
  const { css } = sass.renderSync({ file, outputStyle: 'compressed' });
  await fs.outputFile(`${outdir}/index.css`, css);
};

// TODO: resolve package path with something like `require.resolve`
const packagePath = (packageName) => `node_modules/${packageName}`;
const getDeps = async (pkgJsonPath) => {
  const pkgJson = await fs.readJSON(pkgJsonPath);
  return Object.keys(pkgJson.dependencies).filter(
    (packageName) =>
      packageName.startsWith('@kickstartds/') &&
      fs.existsSync(`${packagePath(packageName)}/lib/exports.json`)
  );
};

(async () => {
  try {
    const exportsPaths = await fg(
      'node_modules/@kickstartds/*/lib/exports.json'
    );
    const kdsPackageNames = exportsPaths.map(
      (exportsPath) =>
        exportsPath.match(/^.*(@kickstartds\/.*)\/lib\/exports\.json$/)[1]
    );
    await Promise.all(
      kdsPackageNames.map(async (packageName) => {
        const pkgPath = packagePath(packageName);
        if (!graph.hasNode(packageName)) graph.addNode(packageName, pkgPath);

        const deps = await getDeps(`${pkgPath}/package.json`);
        deps.forEach((depName) => {
          const depPath = packagePath(depName);
          if (!graph.hasNode(depName)) graph.addNode(depName, depPath);
          graph.addDependency(packageName, depName);
        });
      })
    );

    const sortedPackages = graph.overallOrder();

    const [cssEntries, jsEntries] = await sortedPackages.reduce(
      async (prevPromise, packageName) => {
        let [cssEntry, jsEntry] = await prevPromise;
        const pkgPath = graph.getNodeData(packageName);
        const exportsJson = await fs.readJSON(`${pkgPath}/lib/exports.json`);
        Object.keys(exportsJson).forEach((key) => {
          if (key.endsWith('.css')) {
            cssEntry += `@use '${pkgPath}/lib/${key}' as *;\n`;
          } else if (
            key.endsWith('.js') &&
            key !== 'index.js' &&
            packageName !== '@kickstartds/core'
          ) {
            jsEntry += `import '${packageName}/lib/${key}';\n`;
          }
        });
        return [cssEntry, jsEntry];
      },
      ['', '']
    );

    const tmpScssPath = `${outdir}/tmp.scss`;
    const tmpJsPath = `${outdir}/tmp.js`;
    await Promise.all([
      fs.outputFile(tmpScssPath, cssEntries),
      fs.outputFile(tmpJsPath, jsEntries),
    ]);

    await Promise.all([bundleJs([tmpJsPath]), bundleCss(tmpScssPath)]);
    await del([tmpScssPath, tmpJsPath]);
  } catch (err) {
    console.error('ouch', err);
    process.exit(1);
  }
})();

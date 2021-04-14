/* eslint-disable no-console */
const fs = require('fs-extra');
const glob = require('fast-glob');
const { getPackages } = require('@lerna/project');
const del = require('del');

const cwd = process.cwd();

(async () => {
  try {
    const packages = await getPackages(cwd);
    await packages.forEach(async ({ location }) => {
      await del([`${location}/lib`, `${location}/index.ts`]);
      const fileNames = await glob('source/**/*{Component,Context}.{ts,tsx}', {
        cwd: location,
      });
      if (fileNames.length) {
        const indexContent = fileNames
          .map(
            (fileName) =>
              `export * from './${fileName.replace(/\.tsx?$/, '')}';`
          )
          .join('\n');
        const indexPath = `${location}/index.ts`;
        await fs.writeFile(indexPath, indexContent);
      }
    });
  } catch (err) {
    console.error('ouch', err);
    process.exit(1);
  }
})();

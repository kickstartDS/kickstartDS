const fs = require('fs');
const fg = require('fast-glob');
const util = require('util');
const Ajv = require('ajv');

const rmConfig = require('../../build-tools/tasks/rmConfig');

const fsReadFilePromise = util.promisify(fs.readFile);
const ajv = new Ajv({ removeAdditional: true });

const ignoredFormats = ['image', 'video', 'color'];
ignoredFormats.forEach((ignoredFormat) =>
  ajv.addFormat(ignoredFormat, { validate: () => true })
);

(async () => {
  const schemaPaths = await fg(
    `${rmConfig.rootpath}/{packages,node_modules}/@rm-frontend/build-tools/source/_patterns/**/[!_]*.schema.dereffed.json`
  );

  schemaPaths.forEach(async (schemaPath) => {
    try {
      const pathSegments = schemaPath.match(
        /(.*)\/([0-9a-z-]+)\.schema\.dereffed\.json/
      );
      const rootJsonPath = `${pathSegments[1]}/${pathSegments[2]}.json`;
      const variantJsonPaths = await fg(
        `${pathSegments[1]}/${pathSegments[2]}~*\\.json`
      );

      const schemaJson = JSON.parse(await fsReadFilePromise(schemaPath));
      const rootJson = JSON.parse(await fsReadFilePromise(rootJsonPath));

      const validate = ajv.compile(schemaJson);
      const isRootJsonValid = validate(rootJson);
      if (!isRootJsonValid) {
        if (rootJsonPath.indexOf('keyvisual/keyvisual/') > -1) {
          console.log(
            `ERROR: root json for ${rootJsonPath} invalid`,
            validate.errors
          );
        }
      }

      variantJsonPaths.forEach(async (variantJsonPath) => {
        const variantJson = JSON.parse(
          await fsReadFilePromise(variantJsonPath)
        );
        const mergedJson = Object.assign(rootJson, { ...variantJson });
        const isVariantJsonValid = validate(mergedJson);
        if (!isVariantJsonValid) {
          if (variantJsonPath.indexOf('keyvisual/keyvisual/') > -1) {
            // console.log(`ERROR: variant json for ${variantJsonPath} invalid`, validate.errors);
          }
        }
      });
    } catch (err) {
      if (err && err.errno === -2 && err.code === 'ENOENT') {
        console.log(`ERROR: missing JSON data for ${schemaPath}`);
      } else {
        console.log('MISC: error encountered:', err);
      }
    }
  });
})();

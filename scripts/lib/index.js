const del = require('del');
const rollup = require('./rollup');
const scss = require('./scss');
const copySchema = require('./copySchema');

(async () => {
  await del('lib');
  await Promise.all([rollup(), scss(), copySchema()]);
})();

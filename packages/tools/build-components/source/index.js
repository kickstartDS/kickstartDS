const del = require('del');
const bundle = require('./bundle');
// const scss = require('./scss');
const copySchema = require('./copySchema');

(async () => {
  await del('lib');
  await Promise.all([bundle(), copySchema()]);
})();

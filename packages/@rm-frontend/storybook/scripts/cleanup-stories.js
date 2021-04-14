const glob = require('fast-glob');
const del = require('del');

module.exports = async () => {
  // eslint-disable-next-line global-require
  const rmConfig = require('@rm-frontend/build-tools/tasks/rmConfig');
  return glob(`${rmConfig.temppath}/patterns/**/*.stories.ts`).then(del);
};

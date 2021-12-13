const { root } = require('./utils');

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

module.exports = {
  includePaths,
  importer,
  quietDeps: true,
};

// e.g. 'module-xy/source/2-molecules/foo/foo.hbs' -> '2-molecules/foo/foo.hbs'
// e.g. '../../module-xy/source/2-molecules/foo/foo.hbs -> '2-molecules/foo/foo.hbs'
module.exports = (path) => {
  const pathArray = path.split('/');
  const sourceIndex = pathArray.indexOf('source');
  return pathArray.slice(sourceIndex + 1).join('/');
};

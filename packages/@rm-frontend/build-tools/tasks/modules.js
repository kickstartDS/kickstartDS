/* eslint-disable import/no-dynamic-require, global-require */
const { relative } = require('path');
const glob = require('fast-glob');
const merge = require('lodash/merge');
const { DepGraph } = require('dependency-graph');
const rmConfig = require('./rmConfig');

const instancePkg = require(`${rmConfig.instancepath}/package.json`);

const eachFrontendDependency = ({ dependencies = {} }, cb) => {
  Object.keys(dependencies).forEach((dependency) => {
    try {
      const depPkg = require(`${rmConfig.modulespath}/${dependency}/package.json`);
      if (depPkg.config && depPkg.config['rm-frontend']) {
        cb(depPkg);
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
  });
};

// search for modules in package.json
const rmConfigModuleKeysWithoutScope = Object.keys(
  rmConfig.config.modules
).map((m) => m.replace(/^@.+\//, ''));
eachFrontendDependency(instancePkg, (depPkg) => {
  // ignore modules with same name (but maybe different scope)
  if (
    rmConfigModuleKeysWithoutScope.indexOf(
      depPkg.name.replace(/^@.+\//, '')
    ) === -1
  ) {
    rmConfig.config.modules[depPkg.name] = depPkg.config['rm-frontend'];
  }
});

const graph = new DepGraph();

let modules = Object.entries(rmConfig.config.modules)
  .filter(([, value]) => value)
  .map(([key, value]) => {
    const [prefix, name] = key.split('/');
    const config = value === true ? undefined : value;
    const fullPath = `${rmConfig.modulespath}/${key}`;
    const path = relative(rmConfig.rootpath, fullPath);
    const [jsGlob] = glob.sync(`${fullPath}/source/${name}.js`);
    const [scssGlob] = glob.sync(`${fullPath}/source/${name}.scss`);
    // don't watch rm-frontend modules in node_modules folder
    const watch = /^(?!node_modules\/@rm-frontend).+/.test(path);

    const pckgJson = require(`${fullPath}/package.json`);
    let dependsOn;
    const dependencies = [];

    eachFrontendDependency(pckgJson, (depPkg) => {
      if (new RegExp(`^@rm-frontend/${name}$`).test(depPkg.name)) {
        dependsOn = `node_modules/${depPkg.name}`;
      }
      dependencies.push(depPkg.name);
    });

    const apiGlob = glob.sync(`${fullPath}/source/api.js`);

    graph.addNode(key);

    return {
      key,
      prefix,
      name,
      config,
      path,
      entries: {
        js: jsGlob,
        scss: scssGlob,
      },
      watch,
      dependsOn,
      dependencies,
      hasApi: !!apiGlob.length,
    };
  });

modules.forEach((value) =>
  value.dependencies.forEach(
    (dep) => graph.hasNode(dep) && graph.addDependency(value.key, dep)
  )
);
const modulesOrder = graph.overallOrder();
modules = modules.sort(
  (a, b) => modulesOrder.indexOf(a.key) - modulesOrder.indexOf(b.key)
);

const modulesConfig = modules.reduce((prev, curr) => {
  prev[curr.name] = merge(prev[curr.name], curr.config);
  return prev;
}, {});

const buildBasePaths = modules.map((value) => value.path);

const watchBasePaths = modules
  .filter((value) => value.watch)
  .map((value) => value.path);

module.exports = {
  modules,
  modulesConfig,
  buildBasePaths,
  watchBasePaths,
};

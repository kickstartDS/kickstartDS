import * as mirage from 'miragejs';

let modulesWithApi = process.env.MODULES_WITH_API;
const allRoutes = {};

function startServer() {
  // eslint-disable-next-line no-new
  new mirage.Server({
    routes() {
      this.namespace = 'api';

      Object.entries(allRoutes).forEach(([name, routes]) => {
        routes.forEach((route) => {
          this[route.method](`/${name}${route.path}`, route.handler, {
            timing: Math.floor(100 + Math.random() * 1000),
          });
        });
      });
    },
  });
}

export function addRoute(name, cb) {
  allRoutes[name] = cb(mirage);
  modulesWithApi -= 1;

  if (modulesWithApi === 0) {
    startServer();
  }
}

import { addRoute } from '@rm-frontend/server';

addRoute('search', () => [
  {
    method: 'get',
    path: '/',
    handler() {
      return {
        suggestions: {
          orbit: 124,
          'orbit.de': 9,
          'orbit\u2019s': 1,
        },
      };
    },
  },
]);

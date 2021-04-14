module.exports = require('./.rm-frontendrc.js').extend({
  paths: {
    // public asset paths
    publicJs: 'sidebar/js',
    publicCss: 'sidebar/css',
    publicFonts: 'sidebar/fonts',
    publicImages: 'sidebar/images',
  },
  modules: {
    '@rm-frontend/base': {
      /**
       * Sidebar
       * If `sidebar` is truthy, `base.header.variant` will be ignored
       * `false`    No sidebar
       * `'static'` Default sidebar
       * `'fixed'`  Fixed sidebar
       * `'hidden'` Fixed sidebar, initial hidden (todo)
       * `'rtl'`    Fixed sidebar, initial hidden, RTL (todo)
       */
      sidebar: 'fixed',
    },
  },
});

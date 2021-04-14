const merge = require('lodash/merge');

module.exports = {
  // path to instance
  instance: __dirname,

  // all paths are relative to the current working directory, if not specified otherwise
  paths: {
    // patternlab compilation target
    public: 'dist',

    // public asset paths
    publicJs: 'js',
    publicCss: 'css',
    publicFonts: 'fonts',
    publicImages: 'images',
  },
  // in some browsers this value is used to color the adress bar
  themeColor: '#0e7273',

  organization: {
    name: '',
  },

  logo: {
    alt: '',
    width: '',
    height: '',
    src: {
      default: '',
      'transparent-header': '',
    },
  },

  modules: {},

  extend(config) {
    return merge(this, config);
  },
};

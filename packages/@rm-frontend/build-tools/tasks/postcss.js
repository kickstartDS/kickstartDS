const postCSS = require('gulp-postcss');
const criticalSplit = require('postcss-critical-split');
const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const sortMediaQueries = require('postcss-sort-media-queries');
const autoprefixer = require('autoprefixer');
const cssmin = require('postcss-clean');

const PLUGINS = {
  DEV: (output) => [
    criticalSplit({ output }),
    sortMediaQueries(),
    combineDuplicatedSelectors(),
    autoprefixer(),
  ],
  PROD: (output) => [
    ...PLUGINS.DEV(output),
    cssmin({
      // https://github.com/jakubpawlowicz/clean-css/tree/v4.2.1#constructor-options
      rebase: false,
      level: {
        1: {
          specialComments: 'all',
        },
      },
    }),
  ],
};

module.exports = {
  devCritical: () =>
    postCSS(PLUGINS.DEV(criticalSplit.output_types.CRITICAL_CSS)),
  devRest: () => postCSS(PLUGINS.DEV(criticalSplit.output_types.REST_CSS)),
  prodCritical: () =>
    postCSS(PLUGINS.PROD(criticalSplit.output_types.CRITICAL_CSS)),
  prodRest: () => postCSS(PLUGINS.PROD(criticalSplit.output_types.REST_CSS)),
};

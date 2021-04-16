const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const sortMediaQueries = require('postcss-sort-media-queries');
const autoprefixer = require('autoprefixer');
const cssmin = require('postcss-clean');

const dev = [sortMediaQueries(), combineDuplicatedSelectors(), autoprefixer()];

const prod = [
  ...dev,
  cssmin({
    // https://github.com/jakubpawlowicz/clean-css/tree/v4.2.1#constructor-options
    rebase: false,
    level: {
      1: {
        specialComments: 'all',
      },
    },
  }),
];

module.exports = { dev, prod };

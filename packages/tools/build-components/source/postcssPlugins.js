const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const sortMediaQueries = require('postcss-sort-media-queries');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const dev = [sortMediaQueries(), combineDuplicatedSelectors(), autoprefixer()];

const prod = [
  ...dev,
  cssnano({
    preset: [
      'default',
      {
        discardComments: {
          remove(comment) {
            return !(
              comment.indexOf('!') === 0 || comment.indexOf('critical:') === 0
            );
          },
        },
        calc: false,
      },
    ],
  }),
];

module.exports = process.env.NODE_ENV === 'production' ? prod : dev;

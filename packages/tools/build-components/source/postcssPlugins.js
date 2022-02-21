const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const sortMediaQueries = require('postcss-sort-media-queries');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const dev = [sortMediaQueries(), combineDuplicatedSelectors(), autoprefixer()];
const prod = [...dev, cssnano({ preset: ['default', { calc: false }] })];

module.exports = process.env.NODE_ENV === 'production' ? prod : dev;

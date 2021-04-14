const merge = require('lodash/merge');

module.exports = (...args) => merge({}, ...args.slice(0, -1));

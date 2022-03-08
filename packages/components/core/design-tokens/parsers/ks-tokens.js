/* eslint-disable no-console */
/* eslint-disable consistent-return */
const tmpl = require('../templates');

module.exports = {
  pattern: /\.ks-tokens\.json$/,
  parse({ contents }) {
    try {
      return tmpl(JSON.parse(contents));
    } catch (error) {
      console.log(error);
    }
  },
};

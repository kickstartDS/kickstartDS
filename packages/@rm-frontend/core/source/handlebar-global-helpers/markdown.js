const marked = require('marked');

module.exports = (Handlebars) => (arg) => {
  if (typeof arg === 'string') {
    // used as inline helper
    return new Handlebars.SafeString(marked(arg));
  }
  if (arg.fn) {
    // used as block helper
    return marked(arg.fn());
  }
  return '';
};

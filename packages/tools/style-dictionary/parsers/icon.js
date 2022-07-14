const { basename } = require('path');

module.exports = {
  pattern: /\/icons\/(?!_).+\.svg$/,
  parse({ filePath, contents }) {
    return {
      icons: {
        [basename(filePath, '.svg')]: {
          value: contents.trim(),
        },
      },
    };
  },
};

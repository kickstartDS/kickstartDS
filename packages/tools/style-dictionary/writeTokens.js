const { writeFile } = require('fs/promises');
const path = require('path');
const createTokens = require('./createTokens');

module.exports = (primitives, folder) =>
  Promise.all(
    createTokens(primitives).map(([name, tokens]) =>
      writeFile(
        path.join(folder, `${name}.json`),
        JSON.stringify(tokens, null, 2)
      )
    )
  );

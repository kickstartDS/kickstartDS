const { Readable } = require('stream');
const through = require('through2');
const Vinyl = require('vinyl');

const whitePlugin = (userCallback) =>
  through.obj((file, _, callback) => {
    if (userCallback) userCallback(file);
    callback(null, file);
  });

const fakeFileStream = (filename, string) => {
  const src = Readable({ objectMode: true });
  // eslint-disable-next-line no-underscore-dangle
  src._read = () => {
    src.push(
      new Vinyl({
        path: filename,
        contents: Buffer.from(string),
      })
    );
    src.push(null);
  };
  return src;
};

module.exports = {
  whitePlugin,
  fakeFileStream,
};

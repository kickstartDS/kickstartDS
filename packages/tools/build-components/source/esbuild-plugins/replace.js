// modified copy of https://github.com/naecoo/esbuild-plugin-replace/blob/main/src/index.js
const fs = require('fs');
const MagicString = require('magic-string');

const toFunction = (functionOrValue) => {
  if (typeof functionOrValue === 'function') return functionOrValue;
  return () => functionOrValue;
};

const longest = (a, b) => b.length - a.length;

const mapToFunctions = (options) => {
  const values = options.values
    ? Object.assign({}, options.values)
    : Object.assign({}, options);
  delete values.delimiters;
  delete values.include;
  delete values.exclude;

  return Object.keys(values).reduce((fns, key) => {
    const functions = Object.assign({}, fns);
    functions[key] = toFunction(values[key]);
    return functions;
  }, {});
};

const generateFilter = (options) => {
  let include = /.*/;
  let exclude = null;
  let hasValidInclude = false;

  if (options.include) {
    if (Object.prototype.toString.call(options.include) !== '[object RegExp]') {
      console.warn(
        `Options.include must be a RegExp object, but gets an '${typeof options.include}' type.`
      );
    } else {
      hasValidInclude = true;
      include = options.include;
    }
  }

  if (options.exclude) {
    if (Object.prototype.toString.call(options.exclude) !== '[object RegExp]') {
      console.warn(
        `Options.exclude must be a RegExp object, but gets an '${typeof options.exclude}' type.`
      );
    } else if (!hasValidInclude) {
      // Only if `options.include` not set, take `options.exclude`
      exclude = options.exclude;
    }
  }

  return { include, exclude };
};

const replaceCode = (code, id, pattern, functionValues) => {
  const magicString = new MagicString(code);
  while ((match = pattern.exec(code))) {
    const start = match.index;
    const end = start + match[0].length;
    const replacement = String(functionValues[match[1]](id));
    magicString.overwrite(start, end, replacement);
  }
  return magicString.toString();
};

// todo: add preventAssignment option & support sourceMap
exports.replace = (options = {}) => {
  const { include, exclude } = generateFilter(options);
  const functionValues = mapToFunctions(options);
  const empty = Object.keys(functionValues).length === 0;
  const keys = Object.keys(functionValues).sort(longest);
  const { delimiters } = options;
  const pattern = delimiters
    ? new RegExp(`${delimiters[0]}(${keys.join('|')})${delimiters[1]}`, 'g')
    : new RegExp(`\\b(${keys.join('|')})\\b`, 'g');
  return {
    name: 'replace',
    setup(build) {
      build.onLoad({ filter: include }, async (args) => {
        // if match exclude, skip
        if (exclude && args.path.match(exclude)) {
          return;
        }
        const source = await fs.promises.readFile(args.path, 'utf8');
        const contents = empty
          ? source
          : replaceCode(source, args.path, pattern, functionValues);
        const loader = args.path.match(/tsx$/)
          ? 'tsx'
          : args.path.match(/ts$/)
          ? 'ts'
          : 'js';
        return { contents, loader };
      });
    },
  };
};
module.exports = exports;

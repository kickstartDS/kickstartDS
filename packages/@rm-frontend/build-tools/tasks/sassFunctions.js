const at = require('lodash/at');
const sass = require('sass');
const utils = require('node-sass-utils')(sass);
// const { castToSass } = require('./coercion')(sass);
const rmConfig = require('./rmConfig');
const { modulesConfig } = require('./modules');

const cssUnits = [
  'rem',
  'em',
  'vh',
  'vw',
  'vmin',
  'vmax',
  'ex',
  '%',
  'px',
  'cm',
  'mm',
  'in',
  'pt',
  'pc',
  'ch',
];

// Convert js strings to dimenssions
const convertStringToSassDimension = (result) => {
  // Only attempt to convert strings
  if (typeof result !== 'string') {
    return result;
  }

  const parts = result.match(/[a-zA-Z]+|[0-9]+/g);

  if (!parts || parts.length !== 1) {
    return result;
  }

  const value = parts[0];
  const unit = parts[parts.length - 1];

  if (cssUnits.indexOf(unit) !== -1) {
    return new utils.SassDimension(parseInt(value, 10), unit);
  }

  return result;
};

const rm = {
  modules: modulesConfig,
  paths: {
    js: `/${rmConfig.config.paths.publicJs}`,
    css: `/${rmConfig.config.paths.publicCss}`,
    font: `/${rmConfig.config.paths.publicFonts}`,
    images: `/${rmConfig.config.paths.publicImages}`,
  },
  env: process.env,
};

module.exports = {
  /**
   * @example in sass: `$variant: rm('modules.base.organisms.header.variant');`
   * @see https://itnext.io/sharing-variables-between-js-and-sass-using-webpack-sass-loader-713f51fa7fa0
   */
  'rm($path)': (path) => {
    let result = at(rm, path.getValue())[0];
    if (typeof result === 'object') {
      Object.keys(result).forEach((key) => {
        result[key] = convertStringToSassDimension(result[key]);
      });
    } else {
      result = convertStringToSassDimension(result);
    }
    return utils.castToSass(result);
  },
};

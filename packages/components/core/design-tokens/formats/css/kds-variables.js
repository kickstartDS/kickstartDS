/* eslint-disable no-restricted-syntax */
const process = require('process');
const { formatHelpers } = require('style-dictionary');
const postcss = require('postcss');
const colormin = require('postcss-colormin');
const normalizeWhitespace = require('postcss-normalize-whitespace');
const sortMediaQueries = require('postcss-sort-media-queries');

const { fileHeader, createPropertyFormatter } = formatHelpers;

const postcssPlugins = [colormin({ transparent: false }), sortMediaQueries()];
if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(normalizeWhitespace);
}

const getCssProperty = (rule) => rule.split(':', 1)[0];

const additionalRules = {
  'font-size': (fontSizes) =>
    Object.entries(fontSizes).reduce((prev, [family, sizes]) => {
      const { 'bp-factor': bpFactors, ...bases } = sizes;
      Object.keys(bpFactors).forEach((bp) => {
        prev[bp] ??= [];
        prev[bp].push(
          `--ks-font-size-${family}-bp-factor: var(--ks-font-size-${family}-bp-factor-${bp});`
        );
      });

      Object.keys(bases).forEach((base) => {
        const [size] = base.split('-');
        prev._ ??= [];
        prev._.push(
          `--ks-font-size-${family}-${size}: calc(var(--ks-font-size-${family}-${size}-base) * var(--ks-font-size-${family}-bp-factor, 1));`,
          `--ks-font-${family}-${size}: var(--ks-font-size-${family}-${size}) / var(--ks-line-height-${family}-${size}) var(--ks-font-family-${family});`
        );
      });
      return prev;
    }, {}),

  spacing: (spacings) =>
    Object.entries(spacings).reduce(
      (prev, [scale, { 'bp-factor': bpFactors }]) => {
        prev._ ??= [];
        prev._.push(
          `--ks-spacing-${scale}: calc(var(--ks-spacing-${scale}-base) * var(--ks-spacing-${scale}-bp-factor, 1));`
        );

        if (bpFactors) {
          Object.keys(bpFactors).forEach((bp) => {
            prev[bp] ??= [];
            prev[bp].push(
              `--ks-spacing-${scale}-bp-factor: var(--ks-spacing-${scale}-bp-factor-${bp});`
            );
          });
        }
        return prev;
      },
      {}
    ),

  breakpoint: (breakpoints) => ({
    _: [
      `--ks-breakpoints: '${JSON.stringify(
        Object.entries(breakpoints).reduce(
          (prev, [key, { value }]) => ({ ...prev, [key]: value }),
          {}
        )
      )}';`,
    ],
  }),
};

const indent = (level) => new Array(level + 1).join('  ');

module.exports = {
  name: 'css/kds-variables',
  formatter({ dictionary, options, file }) {
    const { selector = ':root', outputReferences = true } = options;
    const { tokens, allTokens } = dictionary;

    const breakpoints = Object.entries(tokens.ks.breakpoint).map(
      ([key, { value }]) => [key, value]
    );
    const writeRules = (lines = [], level = 0, customSelector = selector) =>
      lines.length
        ? `${indent(level) + customSelector} {\n${lines
            .filter(Boolean)
            .map((str) => indent(level + 1) + str.trim())
            .join('\n')}\n${indent(level)}}\n`
        : '';

    const propertyFormatter = createPropertyFormatter({
      outputReferences,
      dictionary,
      format: 'css',
      formatting: {
        indentation: '',
      },
    });

    const colorBaseTokens = [];
    const otherRules = new Map();
    allTokens
      .filter((token) => !token.private)
      .forEach((token) => {
        if (
          token.attributes.category === 'color' &&
          token.path[token.path.length - 1] === 'base'
        ) {
          colorBaseTokens.push(token);
        }
        const rule = propertyFormatter(token);
        otherRules.set(getCssProperty(rule), rule);
      });

    const colorDefaultRules = [];
    const colorInvertedRules = [];
    colorBaseTokens.forEach((token) => {
      const name = token.name.replace('-base', '');
      colorDefaultRules.push(`--${name}: var(--${token.name});`);

      if (token.name.indexOf('-inverted') >= 0) {
        const defaultName = name.replace('-inverted', '');
        const invertedName = name;

        colorInvertedRules.push(
          `--${defaultName}: var(--${invertedName}-base);`,
          `--${invertedName}: var(--${defaultName}-base);`
        );
      }
    });

    const responsiveRules = breakpoints.reduce(
      (prev, [key]) => ({ ...prev, [key]: [] }),
      {}
    );

    for (const [key, fn] of Object.entries(additionalRules)) {
      const { _: root, ...responsive } = fn(tokens.ks[key]);
      root.forEach((rule) => otherRules.set(getCssProperty(rule), rule));
      Object.entries(responsive).forEach(([mediaQuery, rules]) =>
        responsiveRules[mediaQuery].push(...rules)
      );
    }

    const result =
      writeRules([...otherRules.values()]) +
      writeRules(colorDefaultRules, 0, `${selector}, [ks-inverted=false]`) +
      writeRules(colorInvertedRules, 0, '[ks-inverted=true]') +
      breakpoints.reduce(
        (prev, [mediaQuery, breakpoint]) =>
          responsiveRules[mediaQuery]?.length
            ? `${prev}\n@media (min-width: ${breakpoint}) {\n${writeRules(
                responsiveRules[mediaQuery],
                1
              )}\n}`
            : prev,
        ''
      );

    return (
      (process.env.NODE_ENV !== 'production' ? fileHeader({ file }) : '') +
      postcss(postcssPlugins).process(result).css
    );
  },
};

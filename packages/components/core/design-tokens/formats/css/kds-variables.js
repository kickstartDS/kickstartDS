/* eslint-disable no-restricted-syntax */
const process = require('process');
const { formatHelpers } = require('style-dictionary');
const postcss = require('postcss');
const colormin = require('postcss-colormin');
const normalizeWhitespace = require('postcss-normalize-whitespace');
const sortMediaQueries = require('postcss-sort-media-queries');

const { fileHeader, createPropertyFormatter } = formatHelpers;

const postcssPlugins = [colormin, sortMediaQueries()];
if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(normalizeWhitespace);
}

const createResponsiveRules = {
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

        Object.keys(bpFactors).forEach((bp) => {
          prev[bp] ??= [];
          prev[bp].push(
            `--ks-spacing-${scale}-bp-factor: var(--ks-spacing-${scale}-bp-factor-${bp});`
          );
        });
        return prev;
      },
      {}
    ),
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
    const writeRules = (lines = [], level = 0) =>
      lines.length
        ? `${indent(level) + selector} {\n${lines
            .filter(Boolean)
            // .sort()
            .map((str) => indent(level + 1) + str.trim())
            .join('\n')}\n${indent(level)}}`
        : '';

    const rootRules = allTokens.map(
      createPropertyFormatter({
        outputReferences,
        dictionary,
        format: 'css',
      })
    );
    const responsiveRules = breakpoints.reduce(
      (prev, [key]) => ({ ...prev, [key]: [] }),
      {}
    );

    for (const [key, fn] of Object.entries(createResponsiveRules)) {
      const { _: root, ...responsive } = fn(tokens.ks[key]);
      rootRules.push(...root);
      Object.entries(responsive).forEach(([mediaQuery, rules]) =>
        responsiveRules[mediaQuery].push(...rules)
      );
    }

    const result = breakpoints.reduce(
      (prev, [mediaQuery, breakpoint]) =>
        responsiveRules[mediaQuery]?.length
          ? `${prev}\n@media (min-width: ${breakpoint}) {\n${writeRules(
              responsiveRules[mediaQuery],
              1
            )}\n}`
          : prev,
      writeRules(rootRules)
    );

    return (
      (process.env.NODE_ENV !== 'production' ? fileHeader({ file }) : '') +
      postcss(postcssPlugins).process(result).css
    );
  },
};

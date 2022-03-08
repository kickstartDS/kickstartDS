/* eslint-disable no-restricted-syntax */

const { format } = require('style-dictionary');

const mediaQueries = [
  ['xs', '25em'],
  ['s', '40em'],
  ['m', '60em'],
  ['l', '64em'],
  ['xl', '75em'],
];

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
    Object.entries(spacings).reduce((prev, [scale, { bp: breakpoints }]) => {
      Object.keys(breakpoints).forEach((bp) => {
        prev[bp] ??= [];
        prev[bp].push(
          `--ks-spacing-${scale}: var(--ks-spacing-${scale}-bp-${bp});`
        );
      });
      return prev;
    }, {}),
};

module.exports = {
  name: 'css/kds-variables',
  formatter({ dictionary, options, file }) {
    const { selector = ':root' } = options;
    const { tokens } = dictionary;
    const writeRules = (lines = []) =>
      lines.length ? `${selector} {\n  ${lines.join('\n  ')}\n}` : '';

    let result = format['css/variables']({ dictionary, options, file });

    const responsiveRules = mediaQueries.reduce(
      (prev, [mediaQuery]) => ({ ...prev, [mediaQuery]: [] }),
      {}
    );

    for (const [key, fn] of Object.entries(createResponsiveRules)) {
      const { _, ...responsive } = fn(tokens.ks[key]);
      result += writeRules(_);
      Object.entries(responsive).forEach(([mediaQuery, rules]) =>
        responsiveRules[mediaQuery].push(...rules)
      );
    }

    for (const [mediaQuery, breakpoint] of mediaQueries) {
      if (responsiveRules[mediaQuery]?.length) {
        result += `\n@media (min-width: ${breakpoint}) {\n${writeRules(
          responsiveRules[mediaQuery]
        )}\n}`;
      }
    }

    return result;
  },
};

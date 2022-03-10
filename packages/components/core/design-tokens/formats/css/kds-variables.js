/* eslint-disable no-restricted-syntax */

const { format } = require('style-dictionary');

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

module.exports = {
  name: 'css/kds-variables',
  formatter({ dictionary, options, file }) {
    const { selector = ':root' } = options;
    const { tokens } = dictionary;
    const breakpoints = Object.entries(tokens.ks.breakpoint).map(
      ([key, { value }]) => [key, value]
    );
    const writeRules = (lines = []) =>
      lines.length ? `${selector} {\n  ${lines.join('\n  ')}\n}` : '';

    let result = format['css/variables']({ dictionary, options, file });

    const responsiveRules = breakpoints.reduce(
      (prev, [key]) => ({ ...prev, [key]: [] }),
      {}
    );

    for (const [key, fn] of Object.entries(createResponsiveRules)) {
      const { _, ...responsive } = fn(tokens.ks[key]);
      result += writeRules(_);
      Object.entries(responsive).forEach(([mediaQuery, rules]) =>
        responsiveRules[mediaQuery].push(...rules)
      );
    }

    for (const [mediaQuery, breakpoint] of breakpoints) {
      if (responsiveRules[mediaQuery]?.length) {
        result += `\n@media (min-width: ${breakpoint}) {\n${writeRules(
          responsiveRules[mediaQuery]
        )}\n}`;
      }
    }

    return result;
  },
};

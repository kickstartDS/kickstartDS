/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
module.exports = ({ font }) =>
  Object.entries(font).reduce(
    (prev, [family, { size, 'bp-factor': bpFactor }]) => {
      prev['font-size'][family] ??= { 'bp-factor': {} };
      prev['line-height'][family] ??= {};

      for (const bp in bpFactor) {
        prev['font-size'][family]['bp-factor'][bp] = { value: bpFactor[bp] };
      }

      for (const scale in size) {
        prev['font-size'][family][`${scale}-base`] = {
          value: `${size[scale][0] / 16}rem`,
          attributes: { category: 'size' },
          token: { category: `Font Sizes: ${family}`, presenter: 'FontSize' },
        };

        prev['line-height'][family][scale] = {
          value: size[scale][1],
        };
      }

      return prev;
    },
    {
      'font-size': {},
      'line-height': {},
    }
  );

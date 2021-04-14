module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    // 'stylelint-selector-bem-pattern',
  ],
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  rules: {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
    ],
    'order/properties-alphabetical-order': null,
    'scss/percent-placeholder-pattern': null,
    'scss/dollar-variable-pattern': null,
    'max-nesting-depth': 6,
    'selector-max-compound-selectors': 5,
    'color-named': null,
    'selector-class-pattern': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
  },
};

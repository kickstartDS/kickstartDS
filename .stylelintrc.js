module.exports = {
  extends: '@kickstartds/stylelint-config',
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['container'] }],
  },
};

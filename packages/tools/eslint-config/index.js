const findUp = require('find-up');

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: findUp.sync('.babelrc'),
    },
  },
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
      },
    ],
    'import/prefer-default-export': [0],
    'func-names': [0, 'as-needed'],
  },
  globals: {
    rm: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'no-nested-ternary': ['off'],
      },
    },
  ],
};

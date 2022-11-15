'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['@typescript-eslint', 'ember'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    // This mostly bans `object`, which is correct in general, but we actually
    // need in a couple key places for destroyables handling!
    '@typescript-eslint/ban-types': 'off',
  },
  overrides: [
    // node files
    {
      files: ['./.eslintrc.js', './.prettierrc.js', './addon-main.js'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // We *want* to use traditional require statements in Node `.js` files.
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};

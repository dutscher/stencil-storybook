module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['airbnb-typescript', 'plugin:@stencil/recommended'],
  ignorePatterns: ['*eslintrc*', 'loader.js', 'node_modules', 'dist', 'stencil-stories.ts'],
  // Severity should be one of the following: 0 = off, 1 = warn, 2 = error
  rules: {
    '@stencil/required-jsdoc': 'error',
    'no-restricted-syntax': 'error',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/lines-between-class-members': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    // '/' + var vs. `/${var}`
    'prefer-template': 'off',
    // changelogContent +=
    'operator-linebreak': 'off',
    // .map((a) =>
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    // (() => {})()
    'wrap-iife': 'off',
    // parseInt(1) -> 1 / parseInt(1, 10) -> 1
    'radix': 'off',
    'prefer-destructuring': 'off',
    // not noticing role="radio" in stencil
    'jsx-a11y/label-has-associated-control': 'off',
    // shows weird staff ref={(el) => (this.input = el)}
    'no-return-assign': 'off',
    // Variant.args = args;
    'no-param-reassign': 'off',
    // !!featurePath
    'no-extra-boolean-cast': 'off',
    // we have all 4k
    'max-len': 'off',
    // stencil components dont need default
    'import/prefer-default-export': 'off',
    // import { addons } from '@storybook/addons';
    'import/no-extraneous-dependencies': 'off',
    // `../packages/${mandant}/package.json`
    'import/no-dynamic-require': 'off',
    // bullshit newline after {
    'object-curly-newline': 'off',
    // windows CRLF and unix LF hazzle
    'linebreak-style': 'off',
    // element ? `__${element}` : ''
    '@stencil/strict-boolean-conditions': 'off',
    // export const enum BadgeSize {
    '@stencil/ban-exported-const-enums': 'off',
    // @ComponentName() componentName;
    '@stencil/own-props-must-be-private': 'off',
    // unit testing describe is not defined
    'no-undef': 'off',
    // true && 'modifier' in unit test
    'no-constant-condition': 'off',
    // replacesInFiles++
    'no-plusplus': 'off',
    // react/* because we use stencil
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/no-unknown-property': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};

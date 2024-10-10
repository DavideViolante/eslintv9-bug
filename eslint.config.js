// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    ignores: ['dist', '*.config.js'],
    rules: {
      'indent': ['error', 2],
    }
  }
);
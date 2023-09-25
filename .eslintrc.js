module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  ignorePatterns: ['allure-report/'],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021, // Use ECMAScript 2021 syntax
    sourceType: 'module',
  },
  rules: {
    // Add your custom ESLint rules and configurations here
    // For example, to allow console.log statements in development:
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
  plugins: [
    // Add any necessary ESLint plugins here
    // For example, if using WebDriverIO and Mocha:
    'wdio',
    'mocha',
  ],
};

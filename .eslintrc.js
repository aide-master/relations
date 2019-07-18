module.exports = {
    env: {
      browser: true,
      es6: true,
      mocha: true,
      jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      useJSXTextNode: true
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['react', 'jest', 'react-hooks', '@typescript-eslint', 'i18n'],
    rules: {},
    settings: {
      react: {
        version: '999.999.999'
      }
    },
    globals: {}
  }
  
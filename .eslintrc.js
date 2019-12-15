module.exports = {
  extends: ['standard-with-typescript', 'standard-react'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    node: true,
    jest: true
  }
}

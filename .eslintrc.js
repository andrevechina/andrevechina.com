module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  parser: 'babel-eslint',
  env: {
    browser: true
  }
}

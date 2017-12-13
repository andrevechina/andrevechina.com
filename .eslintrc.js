module.exports = {
    extends: [ 'airbnb', 'standard' ],
    parser: 'babel-eslint',
    env: {
        browser: true
    },
    rules: {
        'import/no-named-as-default': 'off'
    }
}
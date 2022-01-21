module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'eslint-config-preact'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    }
}

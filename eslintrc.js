module.exports = {
  baseConfig: {
    extends: ['standard', 'standard-jsx'],
    parser: 'babel-eslint',
    plugins: [
      'flowtype',
      'jest'
    ],
    rules: {
      'comma-dangle': ["error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline"
      }],
      'jsx-quotes': ["error", "prefer-single"],
      'space-before-function-paren': ["error", "always"],
    }
  },
}

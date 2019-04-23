const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('../tslint.js')), './'),
  ],
  rules: {
    // New rules in here
    'no-duplicate-imports': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-duplicate-case': true,
    'no-import-side-effect': true,
    'no-irregular-whitespace': true,
    'no-return-await': true,
    'no-sparse-arrays': true,
    'prefer-conditional-expression': true,
    'space-within-parens': 0,
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-inner-declarations': true,
    'no-invalid-regexp': true,
    'no-invalid-template-strings': true,
    'no-multi-spaces': true,
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'object-curly-spacing': [true, 'always'],
    'ter-no-proto': true,
    'ter-no-script-url': true,
    'ter-no-self-compare': true,
    'valid-typeof': true,
  },
};

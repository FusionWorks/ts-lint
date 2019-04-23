const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-config-airbnb')), './'),
  ],
  rules: {
    "array-type": true,
    "arrow-parens": true,
    "deprecation": {
      "severity": "warn"
    },
    "import-blacklist": [
      true,
      "rxjs/Rx"
    ],
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      {
        "limit": 140,
        // class [a-zA-Z]+ implements pattern will ignore all class declarations implementing interfaces.
        // // pattern will ignore all in-line comments.
        "ignore-pattern": "class [a-zA-Z]+ implements |// "
      }
    ],
    "member-access": [
      true,
      "no-public",
    ],
    "member-ordering": [
      true, {
        "order": [
          // Static fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",

          // Instance fields
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          // Constructor
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          // Instance methods
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",

          // Static methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",
        ],
      },
    ],
    "no-consecutive-blank-lines": true,
    "no-empty": [
      true,
      "allow-empty-catch",
      "allow-empty-functions",
    ],
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-use-before-declare": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-sort-keys": false,
    "ordered-imports": false,
    "quotemark": [
      true,
      "single"
    ],
    "trailing-comma": [
      true,
      {
        "multiline": {
          "objects": "always",
          "arrays": "always",
          "functions": "ignore",
          "typeLiterals": "ignore"
        },
        "esSpecCompliant": true
      }
    ],
    "no-debugger": true,
  },
};
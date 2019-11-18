const { rulesDirectory, rules } = require('../tslint');

module.exports = {
  rulesDirectory: [
    ...rulesDirectory,
  ],
  rules: {
    ...rules,
    // New rules in here
    "no-output-on-prefix": true,
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "array-type": [
      true,
      "array",
    ],
    "semicolon": [
      true,
      "always",
      "ignore-bound-class-methods",
      "ignore-interfaces",
    ],
    "no-empty": [
      false
    ],
    "whitespace": [
      true,
      "check-module"
    ],
    "trailing-comma": [
      true,
      {
        "multiline": "always",
        "singleline": "never",
        "esSpecCompliant": true
      }
    ],
    "import-blacklist": [
      true,
      "rxjs",
      "ngx-bootstrap"
    ],
  },
};

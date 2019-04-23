const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('../tslint.js')), './'),
  ],
  rules: {
    "no-output-on-prefix": true,
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true
  },
};

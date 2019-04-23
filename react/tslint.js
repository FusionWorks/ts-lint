const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('../tslint.js')), './'),
  ],
  rules: {
    // New rules in here
  },
};

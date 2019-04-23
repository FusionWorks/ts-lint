const { rulesDirectory, rules } = require('../tslint');

module.exports = {
  rulesDirectory: [
    ...rulesDirectory,
  ],
  rules: {
    ...rules,
    // New rules in here
  },
};

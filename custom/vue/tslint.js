path.join(path.dirname(require.resolve('../tslint.js')), './'),

  module.exports = {
    rulesDirectory: [
      ...rulesDirectory,
    ],
    rules: {
      ...rules,
      // New rules in here
    },
  };

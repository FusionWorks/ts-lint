const path = require('path');
const mainRules = require('./main-rules');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-config-airbnb')), './'),
  ],
  rules: {
    ...mainRules,
  },
};

console.log(path.join(path.dirname(require.resolve('tslint-config-airbnb')), './'))
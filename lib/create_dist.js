const fs = require("fs-extra");
const { name, version, main } = require('../package.json');

const copyToDist = (fileName) => {
  console.log(`Create distfile ${fileName}`);
  fs.copy(`./${fileName}`, `./dist/${fileName}`, (err) => {
    if (err) {
      console.log('An error occured while copying the folder.')
      return console.error(err)
    }
  });
};

fs.removeSync('./dist');

// Copy simple files
const toCopy = ['tslint.js', 'package.json', 'README.md'];
toCopy.forEach((file) => copyToDist(file));

// Copy all custom configs as /dist/{configName}
const customConfigs = fs.readdirSync('./custom');
customConfigs.forEach((configName) => {
  fs.copySync(`./custom/${configName}`, `./dist/${configName}`);

  // Create package.json in each of /dist/{configName} as tslint require it to work.
  const newPackage = { name: `${name}-${configName}`, version, main };
  fs.writeFileSync(`./dist/${configName}/package.json`, JSON.stringify(newPackage, null, 2));
});
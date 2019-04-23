const fs = require("fs-extra");
const { name, version, main } = require('../package.json');

const copyToDist = (fileName, fileLocation) => {
  if (fileName.indexOf('/') !== -1) {
    copyToDist(fileName.split('/')[1], fileName);
    return;
  }
  console.log(`Create distfile ${fileName}`);
  fs.copy(`./${fileLocation || fileName}`, `./dist/${fileName}`, (err) => {
    if (err) {
      console.log('An error occured while copying the folder.')
      return console.error(err)
    }
  });
};

fs.removeSync('./dist');

const toCopy = ['tslint.js', 'package.json', 'README.md'];
toCopy.forEach((file) => copyToDist(file));


const customConfigs = fs.readdirSync('./custom');
customConfigs.forEach((configName) => {
  fs.copySync(`./custom/${configName}`, `./dist/${configName}`);
  const newPackage = { name: `${name}-${configName}`, version, main };
  fs.writeFileSync(`./dist/${configName}/package.json`, JSON.stringify(newPackage, null, 2));
});
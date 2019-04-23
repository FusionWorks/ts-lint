const fs = require("fs-extra");

const copyToDist = (fileName) => {
  console.log(`Copy './${fileName}' to './dist/${fileName}'`);
  fs.copy(`./${fileName}`, `./dist/${fileName}`, (err) => {
    if (err) {
      console.log('An error occured while copying the folder.')
      return console.error(err)
    }
  });
};

fs.removeSync('./dist');

const toCopy = ['tslint.js', 'package.json', 'README.md', 'angular', 'vue', 'react', 'ionic'];
toCopy.forEach((file) => copyToDist(file));

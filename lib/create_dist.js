const fs = require('fs');

const copyFile = (fileName) => {
  fs.copyFile(`./${fileName}`, `./dist/${fileName}`, (err) => {
    if (err) {
      throw err;
    }

    console.log(`${fileName} was successfully copied to destination folder.`);
  });
};

const deleteFolderRecursive = (path) => {
  if (!fs.existsSync(path)) {
    return;
  }
  console.log('Cleaning out destination folder.');
  fs.readdirSync(path).forEach((file) => {
    const curPath = `${path}/${file}`;
    if (fs.lstatSync(curPath).isDirectory()) {
      deleteFolderRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(path);
};
// Clean out dist folder before copy to it stuff i need.
deleteFolderRecursive('dist');

// Create /dist if it doesnt exists.
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

const toCopy = ['tslint.js', 'package.json', 'README.md'];
toCopy.forEach((file) => copyFile(file));

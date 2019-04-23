# @FusionWorks/ts-lint
  
## Installation

#### Git Clone
```sh
git clone https://github.com/FusionWorks/ts-lint.git
```
#### Move to directory
```sh
cd ts-lint
```
#### Npm install
```sh
npm install
```

## How to work
In case you got to update/add/delete some rule for all the custom/frameworks configurations you should change the content of `tslint.js` from main folder.
In any other case, please navigate to folder `custom` and update `tslint.js` only in **folder** u need.

**Note**  
No need to create `package.json` in any of `custom` folder because it been generated in `build-time` using same version as the main package.

## After Party
#### After u done all the change u need, run:
```sh
npm run build
```

**Note**  
Commit any change if you have to, else the release will fail.  
#### Go an check if everything is fine, if so, run:
```sh
npm run release
```

#### Push everything to `GIT`

```sh
git push origin master
```

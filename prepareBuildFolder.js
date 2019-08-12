const fs = require('fs');
const rimraf = require("rimraf");
const replace = require('replace-in-file');

const dir = './build';
const distDir = './build/dist';
const indexHtmlPath = dir + '/index.html';
const dateTime = new Date().getTime();

// Configure options for replace build.js with build#hash.js file in build/index.html to avoid caching issue
const options = {
  files: indexHtmlPath,
  from: 'build.js',
  to: `build${dateTime}.js`,
};

// Make 'build' folder as production build folder which we will deploy on server
function makeDir() {
  fs.mkdirSync(dir);
  fs.mkdirSync(distDir);
}

// Create 'build' folder if not exist and If exist then delete that folder and make it again for deploy updated code
if (!fs.existsSync(dir)) {
  makeDir();
} else {
  rimraf.sync(dir);
  makeDir();
}

// copy index.html file to build/index.html
const htmlStream = fs.createReadStream('index.html').pipe(fs.createWriteStream(indexHtmlPath));

htmlStream.on('close', () => {
  try {
    // replace build.js with build#hash.js in build/index.html to avoid caching issue
    replace(options)
      .then(results => {
        // copy dist/build.js and updated with build/dist/build#hash.js
        fs.createReadStream('dist/build.js').pipe(fs.createWriteStream(distDir + `/build${dateTime}.js`));
      })
      .catch(error => {
        console.error(error);
        process.exit(1);
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

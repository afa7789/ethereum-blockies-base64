const path = require('path');

const rootDir = path.resolve(__dirname);

module.exports = {
  mode: 'production',
  entry: path.resolve(rootDir, 'src/main.js'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'main.js',
    library: 'ethereum-gradient-base64',
    libraryTarget: 'umd',
    globalObject: "this"
  }
};

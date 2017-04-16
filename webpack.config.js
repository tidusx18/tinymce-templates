// var path = require('path');

const config = {
  entry: {
    // nameOfOutputFile: './path/to/file.js'
    TinymceTemplates: './test.js'
  },
  output: {
    // path: path.resolve(__dirname, 'build'),
    filename: './build.user.js'
  },
  module: {
    rules: [
      // {test: /\.css$/, use: 'style-loader!css-loader'}
    ]
  }
};

module.exports = config;

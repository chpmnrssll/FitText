// const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    demo: './docs/src/demo.js',
    // FitText: './src/FitText.js',
  },
  cache: true,
  output: {
    path: path.join(__dirname, './docs/dist/'),
    // path: path.join(__dirname, './dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
  optimization: {
    minimize: true,
  },
};

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  }
  // devServer: {
  //   contentBase: './dist',
  //   port: 8080,
  //   open: true,
  //   hot: true,
  // },
});
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  /* performance: {
    hints: 'warning'
  }, */
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    https: false,
  },
  // devServer: {
  //   contentBase: './dist',
  //   port: 8080,
  //   open: true,
  //   hot: true,
  // },
});
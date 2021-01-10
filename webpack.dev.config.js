const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
var DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // devtool: 'cheap-module-eval-source-map',
  // performance: {
  //   hints: 'warning'
  // },
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    https: false,
    open: true
  }
  // optimization: {
  //   usedExports: true,
  // },
});
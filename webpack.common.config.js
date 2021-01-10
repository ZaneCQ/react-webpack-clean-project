const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: '[name].bundle.[hash:5].js',
    // crossOriginLoading: 'use-credentials',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
        // sideEffects: false // Tree Shaking - Remove the unused files
      },
      {
        test: /\.(css|less)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: { localIdentName: '[path][name]__[local]--[hash:base64:5]' } }
          },
          'postcss-loader',
          {
            loader: "less-loader",
            options: { lessOptions: { javascriptEnabled: true }, sourceMap: true }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        exclude: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: false }
          },
          'postcss-loader',
          {
            loader: "less-loader",
            options: { lessOptions: { javascriptEnabled: true }, sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My project',
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
      ignoreOrder: false,
    })
  ],
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      chunks: 'all',
    }
  },
};

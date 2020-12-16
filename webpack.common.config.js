const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// console.log('======dirname=======:', __dirname);

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    chunkFilename: '[name].bundle.js',
    // crossOriginLoading: 'use-credentials',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
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
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    namedModules: true,
    splitChunks: {
      chunks: 'all',
    }
  },
};

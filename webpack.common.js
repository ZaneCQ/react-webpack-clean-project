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
    publicPath: '/'
  },
  mode: 'development',
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
            /* options: {
              "presets": ["@babel/preset-env", "@babel/preset-react"],
              "plugins": [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-class-properties",
                [
                  "@babel/plugin-proposal-decorators",
                  { "legacy": true }
                ],
                [
                  "import",
                  { "libraryName": "antd", "style": true }
                ]
              ]
            } */
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
  // presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Project',
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    namedModules: true
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   port: 8080,
  //   open: true,
  //   hot: true,
  // },
};

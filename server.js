const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.common.config.js');
/* const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
 */
app.use(express.static('dist'));
const port = 3000;
app.listen(port, function () {
    console.log('Example app listening on port 3000!\n');
    console.log(`localhost:${port}`);
});
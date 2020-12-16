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
app.get('/', (req, res) => {
    console.log('path:', path.join(__dirname, 'dist', 'index.html'))
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use(express.static('dist'));
/* app.get('/home', (req, res) => {
    res.send('Home');
}); */
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
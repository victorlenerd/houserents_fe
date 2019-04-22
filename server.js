const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./config.dev.js');
const compiler = webpack(config);

const PORT = process.env.PORT;

app.use('/public',express.static(path.join(__dirname, 'public')))

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    writeToDisk: true,
    historyApiFallback: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
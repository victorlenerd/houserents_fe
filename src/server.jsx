const path = require('path');
const express = require('express');
const webpack = require('webpack');
const App = require('./App').default;
const React = require('react');
const StaticRouter = require('react-router-dom').StaticRouter;
const reactDOMServer = require('react-dom/server');
const collect = require('node-style-loader/collect');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../config.dev.js');
const compiler = webpack(config[1]);

const PORT = process.env.PORT;

const initialStyleTag = collect.collectInitial();

const HTML = (body, data) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <link href="https://fonts.googleapis.com/css?family=Archivo:200,400,500,700|Playfair+Display:400,900|Karla:400,700" rel="stylesheet">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <title>Houserents</title>
            ${initialStyleTag}
        </head>
        <body>
            <noscript>
                You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${body}</div>
            <script type="text/javascript">
                window.__DATA__ = ${JSON.stringify(data)}
            </script>
            <script type="text/javascript" src="public/dist/bundle.js"></script>
        </body>
    </html>
`

app.use('/public',express.static(path.join(__dirname, 'public')))

app.use(webpackDevMiddleware(compiler, {
    publicPath: config[1].output.publicPath,
    hot: true,
    writeToDisk: true,
    historyApiFallback: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get(/\/|\/averages|\/roomies/, (req, res) => {
    const context = {};

    res.send(HTML(reactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    ), []))
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
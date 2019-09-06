const path = require('path');
const express = require('express');
const webpack = require('webpack');
import App from './App';
const React = require('react');
const StaticRouter = require('react-router-dom').StaticRouter;
const reactDOMServer = require('react-dom/server');
const collect = require('node-style-loader/collect');
const webpackDevMiddleware = require('webpack-dev-middleware');

import fetchApartments from './utils/apartments';
import predict from './utils/predict';
import majorAreasData from './areas';

const app = express();
const config = require('../config.dev.js');
const compiler = webpack(config[1]);

const PORT = process.env.PORT;
const isDevEnviroment = process.env.NODE_ENV === 'development';

const initialStyleTag = collect.collectInitial();

const HTML = (body, data) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="Find apartments and roommates">
           
            <link href="https://fonts.googleapis.com/css?family=Archivo:200,400,500,700|Playfair+Display:400,900|Karla:400,700" rel="stylesheet">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <link rel="canonical" href="https://houserent.ng" />
                
            <meta name="twitter:title" content="HouseRent">
            <meta name="twitter:description" content="Find apartments and roommates"> 
            <meta name="twitter:site" content="https://houserent.ng">
            <meta name="twitter:creator" content="@victorlenerd">

            <meta property="og:type" content="article" />
            <meta property="og:title" content="HouseRent" /> 
            <meta property="og:description" content="Find apartments and roommates" />
            <meta property="og:url" content="https://houserent.ng" />
            <meta property="og:site_name" content="HouseRent" />

                
            <title>HouseRent</title>
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

app.get(/\/|\/averages|\/roommates/, async (req, res) => {
    const context = {};

    const multipleAreas = {
        locations: majorAreasData().map(({ lat, lng }) => ({ lat, lng })),
        no_bed: 1
    };

    const singleArea = {
        locations: [{ lat: 6.5005, lng: 3.3666 }],
        no_bed: 1
    };

    const apartmentRequestBody = {
        location: { lat: 6.5005, lng: 3.3666 },
        specs: { no_bed: 1, no_bath: 1, no_toilets: 1 }
    };

    let multipleAreasPrice = [];
    let singleAreaPrice = [];
    let apartments = [];
    let apartmentsTotal = 0;

    try {
        [
            { prices: multipleAreasPrice },
            { prices: singleAreaPrice },
            { data: apartments = [], total: apartmentsTotal = 0},
        ] = await Promise.all([
            predict(multipleAreas),
            predict(singleArea, false),
            fetchApartments(apartmentRequestBody, 0, 10, false)
        ]);
    } catch (e) {
        console.error(e);
    }

    res.send(HTML(reactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    ), { multipleAreasPrice,  singleAreaPrice: singleAreaPrice[0], apartments, apartmentsTotal }))
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

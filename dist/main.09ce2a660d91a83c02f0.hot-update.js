exports.id = "main";
exports.modules = {

/***/ "./src/server.jsx":
/*!************************!*\
  !*** ./src/server.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* harmony import */ var _utils_predict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/predict */ "./src/utils/predict.js");
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areas */ "./src/areas.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var path = __webpack_require__(/*! path */ "path");

var express = __webpack_require__(/*! express */ "express");

var webpack = __webpack_require__(/*! webpack */ "webpack");

var App = __webpack_require__(/*! ./App */ "./src/App.js").default;

var React = __webpack_require__(/*! react */ "react");

var StaticRouter = __webpack_require__(/*! react-router-dom */ "react-router-dom").StaticRouter;

var reactDOMServer = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var collect = __webpack_require__(/*! node-style-loader/collect */ "node-style-loader/collect");

var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");



var app = express();

var config = __webpack_require__(/*! ../config.dev.js */ "./config.dev.js");

var compiler = webpack(config[1]);
var PORT = "4040";
var initialStyleTag = collect.collectInitial();

var HTML = function HTML(body, data) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n            <meta name=\"theme-color\" content=\"#000000\">\n            <link href=\"https://fonts.googleapis.com/css?family=Archivo:200,400,500,700|Playfair+Display:400,900|Karla:400,700\" rel=\"stylesheet\">\n            <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"/>\n            <title>Houserents</title>\n            ".concat(initialStyleTag, "\n        </head>\n        <body>\n            <noscript>\n                You need to enable JavaScript to run this app.\n            </noscript>\n            <div id=\"root\">").concat(body, "</div>\n            <script type=\"text/javascript\">\n                window.__DATA__ = ").concat(JSON.stringify(data), "\n            </script>\n            <script type=\"text/javascript\" src=\"public/dist/bundle.js\"></script>\n        </body>\n    </html>\n");
};

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[1].output.publicPath,
  hot: true,
  writeToDisk: true,
  historyApiFallback: true
}));
app.use(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware")(compiler));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.get(/\/|\/averages|\/roomies/, function (req, res) {
  var context = {};
  var areas = Object(_utils_predict__WEBPACK_IMPORTED_MODULE_0__["default"])({
    locations: Object(_areas__WEBPACK_IMPORTED_MODULE_1__["default"])().map(function (_ref) {
      var lat = _ref.lat,
          lng = _ref.lng;
      return {
        lat: lat,
        lng: lng
      };
    }),
    specs: {
      no_bed: 1,
      no_bath: 1,
      no_toilets: 1
    }
  });
  res.send(HTML(reactDOMServer.renderToString(React.createElement(StaticRouter, {
    location: req.url,
    context: context
  }, React.createElement(App, null))), {
    areas: areas
  }));
});
app.listen(PORT, function () {
  return console.log("App listening on port ".concat(PORT));
});
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
  reactHotLoader.register(StaticRouter, "StaticRouter", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
  reactHotLoader.register(app, "app", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
  reactHotLoader.register(compiler, "compiler", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
  reactHotLoader.register(PORT, "PORT", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
  reactHotLoader.register(initialStyleTag, "initialStyleTag", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
  reactHotLoader.register(HTML, "HTML", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), "src"))

/***/ })

};
//# sourceMappingURL=main.09ce2a660d91a83c02f0.hot-update.js.map
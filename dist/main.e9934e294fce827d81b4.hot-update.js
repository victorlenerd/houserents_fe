exports.id = "main";
exports.modules = {

/***/ "./src/server.jsx":
/*!************************!*\
  !*** ./src/server.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, __dirname) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var path = __webpack_require__(/*! path */ "path");

var express = __webpack_require__(/*! express */ "express");

var webpack = __webpack_require__(/*! webpack */ "webpack");

var App = __webpack_require__(/*! ./App */ "./src/App.js");

var React = __webpack_require__(/*! react */ "react");

var reactDOMServer = __webpack_require__(/*! react-dom */ "react-dom").server;

var collectInitial = __webpack_require__(/*! node-style-loader/collect */ "node-style-loader/collect");

var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

var app = express();

var config = __webpack_require__(/*! ../config.dev.js */ "./config.dev.js");

var compiler = webpack(config[1]);
var PORT = "4040";
var initialStyleTag = collectInitial();

var HTML = function HTML(body, data) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n            <meta name=\"theme-color\" content=\"#000000\">\n            <link href=\"https://fonts.googleapis.com/css?family=Archivo:200,400,500,700|Playfair+Display:400,900|Karla:400,700\" rel=\"stylesheet\">\n            <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"/>\n            <script async defer src=\"https://buttons.github.io/buttons.js\"></script>\n            <title>Houserents</title>\n            ".concat(initialStyleTag, "\n        </head>\n        <body>\n            <noscript>\n                You need to enable JavaScript to run this app.\n            </noscript>\n            <div id=\"root\">").concat(body, "</div>\n            <script type=\"text/javascript\">\n                window.__DATA__ = ").concat(JSON.stringify(data), "\n            </script>\n            <script type=\"text/javascript\" src=\"public/dist/bundle.js\"></script>\n        </body>\n    </html>\n");
};

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[1].output.publicPath,
  hot: true,
  writeToDisk: true,
  historyApiFallback: true
}));
app.use(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware")(compiler));
app.get("/*", function (req, res) {
  res.send(HTML(reactDOMServer.renderToString(React.createElement(App, null)), []));
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

  reactHotLoader.register(reactDOMServer, "reactDOMServer", "/Users/Sleekvick/Projects/houserents_fe/src/server.jsx");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), "src"))

/***/ }),

/***/ "node-style-loader":
false,

/***/ "node-style-loader/collect":
/*!********************************************!*\
  !*** external "node-style-loader/collect" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-style-loader/collect");

/***/ })

};
//# sourceMappingURL=main.e9934e294fce827d81b4.hot-update.js.map
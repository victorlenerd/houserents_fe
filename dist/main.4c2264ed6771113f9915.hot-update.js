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
/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_apartments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/apartments */ "./src/utils/apartments.js");
/* harmony import */ var _utils_predict__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/predict */ "./src/utils/predict.js");
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./areas */ "./src/areas.js");




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
app.get(/\/|\/averages|\/roomies/,
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var context, multipleAreas, singleArea, apartments, _ref3, _ref4, multipleAreasPrice, singleAreaPrice, apartmentsData;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context = {};
            multipleAreas = {
              locations: Object(_areas__WEBPACK_IMPORTED_MODULE_5__["default"])().map(function (_ref2) {
                var lat = _ref2.lat,
                    lng = _ref2.lng;
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
            };
            singleArea = {
              locations: [{
                lat: 6.5005,
                lng: 3.3666
              }],
              specs: {
                no_bed: 1,
                no_bath: 1,
                no_toilets: 1
              }
            };
            apartments = {
              location: {
                lat: 6.5005,
                lng: 3.3666
              },
              specs: {
                no_bed: 1,
                no_bath: 1,
                no_toilets: 1
              }
            };
            _context.next = 6;
            return Promise.all([Object(_utils_predict__WEBPACK_IMPORTED_MODULE_4__["default"])(multipleAreas), Object(_utils_predict__WEBPACK_IMPORTED_MODULE_4__["default"])(singleArea), Object(_utils_apartments__WEBPACK_IMPORTED_MODULE_3__["default"])(apartments)]);

          case 6:
            _ref3 = _context.sent;
            _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 3);
            multipleAreasPrice = _ref4[0].prices;
            singleAreaPrice = _ref4[1].prices;
            apartmentsData = _ref4[2];
            res.send(HTML(reactDOMServer.renderToString(React.createElement(StaticRouter, {
              location: req.url,
              context: context
            }, React.createElement(App, null))), {
              multipleAreasPrice: multipleAreasPrice,
              singleAreaPrice: singleAreaPrice[0]
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
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
//# sourceMappingURL=main.4c2264ed6771113f9915.hot-update.js.map
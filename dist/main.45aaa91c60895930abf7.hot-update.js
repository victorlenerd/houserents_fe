exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, __dirname) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var path = __webpack_require__(/*! path */ "path");

var express = __webpack_require__(/*! express */ "express");

var webpack = __webpack_require__(/*! webpack */ "webpack");

var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

var app = express();

var config = __webpack_require__(/*! ../config.dev.js */ "./config.dev.js");

var compiler = webpack(config[1]);
var PORT = "4040";
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[1].output.publicPath,
  hot: true,
  writeToDisk: true,
  historyApiFallback: true
}));
app.use(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware")(compiler));
app.get("/*", function (req, res) {
  console.log(path.resolve(__dirname, 'public', 'index.html'));
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

  reactHotLoader.register(app, "app", "/Users/Sleekvick/Projects/houserents_fe/src/server.js");
  reactHotLoader.register(compiler, "compiler", "/Users/Sleekvick/Projects/houserents_fe/src/server.js");
  reactHotLoader.register(PORT, "PORT", "/Users/Sleekvick/Projects/houserents_fe/src/server.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), "src"))

/***/ })

};
//# sourceMappingURL=main.45aaa91c60895930abf7.hot-update.js.map
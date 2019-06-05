exports.id = "main";
exports.modules = {

/***/ "./config.dev.js":
/*!***********************!*\
  !*** ./config.dev.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, __dirname) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

__webpack_require__(/*! dotenv */ "dotenv").config();

var CleanPlugin = __webpack_require__(/*! clean-webpack-plugin */ "clean-webpack-plugin");

var StartServerPlugin = __webpack_require__(/*! start-server-webpack-plugin */ "start-server-webpack-plugin");

var nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

var webpack = __webpack_require__(/*! webpack */ "webpack");

var path = __webpack_require__(/*! path */ "path");

var envs = {
  NODE_ENV: JSON.stringify(undefined),
  PORT: JSON.stringify("4040")
};
var serverPlugins = [new CleanPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({
  "process.env": envs
})];

if (undefined === 'development') {
  serverPlugins.push(new StartServerPlugin("server.js"));
}

module.exports = [{
  entry: [path.resolve(__dirname, 'src/server.js')],
  watch: undefined === 'development',
  mode: "development",
  devtool: "sourcemap",
  target: "node",
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals({
    whitelist: ["webpack/hot/poll?1000"]
  })],
  module: {
    rules: [{
      test: /\.js?$/,
      use: [{
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env"],
          plugins: ["@babel/transform-regenerator", "@babel/plugin-transform-runtime", "react-hot-loader/babel"]
        }
      }],
      exclude: /node_modules/
    }]
  },
  plugins: serverPlugins,
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
}, {
  entry: ["webpack-hot-middleware/client?path=http://localhost:4040/__webpack_hmr", "./src/index.js"],
  watch: true,
  mode: "development",
  devtool: "source-map",
  target: "web",
  module: {
    rules: [{
      test: /\.js?$/,
      use: ["react-hot-loader/webpack", {
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-hot-loader/babel", "transform-regenerator", "@babel/plugin-syntax-dynamic-import", ["@babel/plugin-transform-runtime", {
            useESModules: true
          }], "transform-class-properties"]
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [new CleanPlugin(path.resolve(__dirname, "public/dist")), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      PORT: JSON.stringify(Object({"NODE_ENV":undefined,"PORT":"4040"}).API_SERVER),
      API_SERVER: JSON.stringify(Object({"NODE_ENV":undefined,"PORT":"4040"}).API_SERVER),
      MAP_API_KEY: JSON.stringify(Object({"NODE_ENV":undefined,"PORT":"4040"}).MAP_API_KEY)
    }
  })],
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
    publicPath: 'public/dist/'
  }
}];
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(envs, "envs", "/Users/Sleekvick/Projects/houserents_fe/config.dev.js");
  reactHotLoader.register(serverPlugins, "serverPlugins", "/Users/Sleekvick/Projects/houserents_fe/config.dev.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), ""))

/***/ })

};
//# sourceMappingURL=main.8c1e321dce02803cf83b.hot-update.js.map
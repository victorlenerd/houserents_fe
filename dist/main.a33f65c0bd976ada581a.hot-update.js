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
  NODE_ENV: JSON.stringify("development"),
  PORT: JSON.stringify("4040"),
  API_SERVER: JSON.stringify(Object({"NODE_ENV":"development","PORT":"4040"}).API_SERVER)
};
var serverPlugins = [new CleanPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({
  "process.env": envs
})];

if (true) {
  serverPlugins.push(new StartServerPlugin("server.js"));
}

module.exports = [{
  entry: [path.resolve(__dirname, 'src/server.jsx')],
  watch: "development" === 'development',
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
      test: /\.(js)x?$/,
      use: [{
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/transform-regenerator", "@babel/plugin-transform-runtime", "transform-class-properties", "react-hot-loader/babel"]
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'node-style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: serverPlugins,
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
}, {
  entry:  true ? ["webpack-hot-middleware/client?path=http://localhost:4040/__webpack_hmr", "./src/index.js"] : undefined,
  watch: "development" === 'development',
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
  plugins: [new CleanPlugin(path.resolve(__dirname, "src/public/dist")), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      PORT: JSON.stringify(Object({"NODE_ENV":"development","PORT":"4040"}).API_SERVER),
      API_SERVER: JSON.stringify(Object({"NODE_ENV":"development","PORT":"4040"}).API_SERVER),
      MAP_API_KEY: JSON.stringify(Object({"NODE_ENV":"development","PORT":"4040"}).MAP_API_KEY)
    }
  })],
  output: {
    path: path.resolve(__dirname, "src/public/dist"),
    filename: "bundle.js",
    publicPath: 'src/public/dist/'
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
//# sourceMappingURL=main.a33f65c0bd976ada581a.hot-update.js.map
exports.id = "main";
exports.modules = {

/***/ "./config.dev.js":
/*!***********************!*\
  !*** ./config.dev.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {__webpack_require__(/*! dotenv */ "dotenv").config();

var CleanPlugin = __webpack_require__(/*! clean-webpack-plugin */ "clean-webpack-plugin");

var StartServerPlugin = __webpack_require__(/*! start-server-webpack-plugin */ "start-server-webpack-plugin");

var nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

var webpack = __webpack_require__(/*! webpack */ "webpack");

var path = __webpack_require__(/*! path */ "path");

var envs = {
  NODE_ENV: JSON.stringify("production"),
  PORT: JSON.stringify("4040"),
  API_SERVER: JSON.stringify("http://localhost:5000"),
  MAP_API_KEY: JSON.stringify("AIzaSyCp3UKASbZkqvCnW3l_RLgM5Ik15JBKpPc")
};
var serverPlugins = [new CleanPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({
  "process.env": envs
})];

if (false) {}

console.log("production");
module.exports = [{
  entry: [path.resolve(__dirname, 'src/server.jsx')],
  watch: "production" === 'development',
  mode: "production",
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
  entry:  false ? undefined : ["./src/index.js"],
  watch: "production" === 'development',
  mode: "production",
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
      PORT: JSON.stringify("http://localhost:5000"),
      API_SERVER: JSON.stringify("http://localhost:5000"),
      MAP_API_KEY: JSON.stringify("AIzaSyCp3UKASbZkqvCnW3l_RLgM5Ik15JBKpPc")
    }
  })],
  output: {
    path: path.resolve(__dirname, "src/public/dist"),
    filename: "bundle.js",
    publicPath: '/public/dist/'
  }
}];
/* WEBPACK VAR INJECTION */}.call(this, ""))

/***/ })

};
//# sourceMappingURL=main.835e93c323a2744e680a.hot-update.js.map
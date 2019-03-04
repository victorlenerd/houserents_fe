require('dotenv').config()

const CleanPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
        "./src/index.js",
    ],
    watch: true,
    mode: "development",
    devtool: "source-map",
    target: "web",
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    "react-hot-loader/webpack",
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                            plugins: [
                                "react-hot-loader/babel",
                                "transform-regenerator",
                                "@babel/plugin-syntax-dynamic-import",
                                ["@babel/plugin-transform-runtime", { useESModules: true }],
                                "transform-class-properties"
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new CleanPlugin(path.resolve(__dirname, "public/dist")),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                API_SERVER: JSON.stringify(process.env.API_SERVER),
                MAP_API_KEY: JSON.stringify(process.env.MAP_API_KEY),
            }
        }),
    ],
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "bundle.js",
        publicPath: 'public/dist/'
    },
};
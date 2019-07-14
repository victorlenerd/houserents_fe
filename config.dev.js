// require('dotenv').config()

const CleanPlugin = require("clean-webpack-plugin");
const StartServerPlugin = require('start-server-webpack-plugin');
const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack');
const path = require('path');

const envs = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(process.env.PORT) || '8080',
    API_SERVER: JSON.stringify(process.env.API_SERVER),
    MAP_API_KEY: JSON.stringify(process.env.MAP_API_KEY)
};

const serverPlugins = [
    new CleanPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
        "process.env": envs
    }),
];

if (process.env.NODE_ENV === 'development') {
    serverPlugins.push(new StartServerPlugin("server.js"));
}


module.exports = [{
    entry: [path.resolve( __dirname, 'src/server.jsx')],
    watch: process.env.NODE_ENV === 'development',
    mode: process.env.NODE_ENV,
    devtool: "sourcemap",
    target: "node",
    node: {
        __filename: true,
        __dirname: true
    },

    externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],

    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            plugins: [
                                "@babel/transform-regenerator",
                                "@babel/plugin-transform-runtime",
                                "transform-class-properties",
                                "react-hot-loader/babel",
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'node-style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }
        ],
    },

    plugins: serverPlugins,

    output: {
        filename: 'server.js',
        path: path.resolve( __dirname, 'dist')
    },
}, {
    entry: process.env.NODE_ENV === 'development' ? [
        "webpack-hot-middleware/client?path=http://localhost:4040/__webpack_hmr",
        "./src/index.js",
    ] : ["./src/index.js"],
    watch: process.env.NODE_ENV === 'development',
    mode: process.env.NODE_ENV,
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
        new CleanPlugin(path.resolve(__dirname, "src/public/dist")),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                PORT: JSON.stringify(process.env.PORT)  || '8080',
                API_SERVER: JSON.stringify(process.env.API_SERVER),
                MAP_API_KEY: JSON.stringify(process.env.MAP_API_KEY),
            }
        }),
    ],
    output: {
        path: path.resolve(__dirname, "src/public/dist"),
        filename: "bundle.js",
        publicPath: '/public/dist/'
    },
}]
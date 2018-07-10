const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundler.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                  }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader' // compiles Less to CSS
                  }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: "My app",
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true
    }
}
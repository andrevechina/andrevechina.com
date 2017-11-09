const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
    entry: path.resolve(paths.srcDirectory, 'index'),
    output: {
        path: path.resolve(paths.distDirectory),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                paths.srcDirectory
            ],
            loader: "babel-loader",
            options: {
                presets: [
                    'env'
                ]
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(paths.distDirectory),
        new HtmlWebpackPlugin({
            template: path.resolve(paths.srcDirectory, 'index.html')
        })
    ]
}
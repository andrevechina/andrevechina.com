const merge = require('webpack-merge')

const webpack = require('./webpack.config')

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpack, {
  plugins: [new UglifyjsWebpackPlugin()]
})

const merge = require('webpack-merge')

const webpack = require('./webpack.config')
const StyleLintPlugin = require('stylelint-webpack-plugin');

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpack, {
  plugins: [
    new UglifyjsWebpackPlugin(),
    new StyleLintPlugin({
      fix: true
    })
  ]
})

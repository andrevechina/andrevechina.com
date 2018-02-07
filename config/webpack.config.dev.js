const merge = require('webpack-merge')
const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin');

const webpack = require('./webpack.config')
const paths = require('./paths')

module.exports = merge(webpack, {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(paths.distDirectory),
    open: true,
    port: 9080
  },
  plugins: [
    new StyleLintPlugin({
      fix: false
    })
  ]
})

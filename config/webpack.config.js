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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      include: [paths.srcDirectory],
      loader: 'eslint-loader',
      options: {
        fix: 'true'
      }
    }, {
      test: /\.jsx?$/,
      include: [paths.srcDirectory],
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }],
          'react'
        ]
      }
    }, {
      test: /\.(jpg|png|svg|gif)/,
      loader: 'file-loader'
    }, {
      test: /\.(scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(paths.distDirectory),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.srcDirectory, 'index.html')
    })
  ]
}

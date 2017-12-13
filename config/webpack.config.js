const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(paths.srcDirectory, 'index')
  ],
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
          'react',
          'stage-2'
        ]
      }
    }, {
      test: /\.(jpg|png|svg|gif)$/,
      loader: 'file-loader'
    }, {
      test: /\.(scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(paths.distDirectory),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.srcDirectory, 'index.html')
    }),
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'development'
    })
  ]
}

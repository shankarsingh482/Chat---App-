const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

const PORT = process.env.REACT_APP_PORT

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/static/index.html'),
      favicon: path.resolve(__dirname, './src/static/favicon.ico'),
      inject: true,
      cache: false,
      minify: false,
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { 'modules': false }],
            'stage-0',
            'react'
          ],
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?outputStyle=expanded&sourceMap'
        ],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  output: {
    filename: 'react-redux-chat-app.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    compress: true,
    port: PORT,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}

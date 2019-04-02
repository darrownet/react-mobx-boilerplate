require('dotenv').config();
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
  ],
  output:{
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    https: false,
    port: 3030,
    contentBase: [resolve(__dirname, '../../src')]
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {self: true}
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../src/templates/index.pug'),
      inject: true,
      data: {
        webpackDevServer: true
      }
    })
  ]
});

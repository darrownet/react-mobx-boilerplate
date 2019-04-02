const DotEnv = require('dotenv-webpack');
const { resolve } = require('path');

module.exports = {
  entry: ['./index.js', './styles/styles.scss'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}}
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new DotEnv()
  ],
  performance: {
    hints: false,
  },
};

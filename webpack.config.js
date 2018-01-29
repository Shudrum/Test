const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'App.js'),
    path.resolve(__dirname, 'node_modules/bootstrap/scss/bootstrap.scss'),
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    }, {
      test: /\.js?/,
      include: [path.join(__dirname)],
      exclude: [/node_modules/],
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
console.log('isProd', isProd);

const VERSION = '1.0.1';

module.exports = {
  entry: {
    index: './src/pages/index.js',
    feedback: './src/pages/feedback.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      UPS: process.env.NODE_ENV,
      VERSION: JSON.stringify(VERSION),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      excludeChunks: ['feedback'],
    }),
    new HtmlWebpackPlugin({
      filename: 'feedback.html',
      template: 'feedback.html',
      excludeChunks: ['index'],
    }),
  ].concat(isProd ? [new MiniCssExtractPlugin()] : []),
};

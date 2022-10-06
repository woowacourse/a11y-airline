const { join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: join(__dirname, '../src/main.js'),
  output: {
    filename: 'main.js',
    path: join(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '../src/index.html'),
      favicon: join(__dirname, '../public/favicon.ico'),
      meta: {
        description: {
          name: 'description',
          contnet: '편안하게 모시겠습니다 - 병민항공 -',
        },
        'og:title': { property: 'og:title', content: '병민항공' },
        'og:type': { property: 'og:type', content: 'website' },
        'og:description': {
          name: 'og:description',
          contnet: '편안하게 모시겠습니다 - 병민항공 -',
        },
        'og:url': { property: 'og:url', content: '' },
        'og:image': {
          property: 'og:image',
          content: '%PUBLIC_URL%/open-graph-image.jpeg',
        },
        'og:image:width': { property: 'og:url', content: 1200 },
        'og:image:height': { property: 'og:url', content: 630 },
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};

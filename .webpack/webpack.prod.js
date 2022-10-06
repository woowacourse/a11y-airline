const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = (env, options) =>
  merge(common(env, options), {
    mode: 'production',
    devtool: false,
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: process.env.PUBLIC_PATH,
      filename: `app.[contenthash].js`,
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          use: ['babel-loader'],
        },
      ],
    },
  })

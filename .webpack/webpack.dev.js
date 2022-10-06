const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = (env, options) => {
  const mode = options

  return merge(common(env, options), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      port: 8080,
      hot: true,
    },
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: process.env.PUBLIC_PATH,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['ts-loader'],
        },
      ],
    },
  })
}

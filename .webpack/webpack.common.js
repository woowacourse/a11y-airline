const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')

module.exports = (env = {}, options = {}) => {
  const { mode } = options

  return {
    entry: './src/index.tsx',
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024,
            },
          },
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /\.module\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName:
                    mode === 'development' ? '[local]--[hash:base64:5]' : '[hash:base64:5]',
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer()],
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({ linkType: false, filename: `css/[name].[contenthash].css` }),
    ],
  }
}

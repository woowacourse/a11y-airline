import { Configuration } from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

interface WebpackConfig extends Configuration {
  devServer?: webpackDevServer.Configuration;
}

const config: WebpackConfig = {
  entry: path.resolve('src', 'index.tsx'),
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.(svg|gif|webp|png|jpe?g)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
  },
};

export default config;

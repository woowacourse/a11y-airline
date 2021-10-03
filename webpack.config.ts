/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,

  entry: "./src/index.tsx",
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: ["..."],
  },
};

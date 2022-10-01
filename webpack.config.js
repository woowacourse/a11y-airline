const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
		clean: true,
	},
	devtool: 'source-map',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
		modules: ['node_modules'],
		extensions: ['.js', '.ts', '.tsx'],
	},
	devServer: {
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
				generator: {
					filename: '[name].[contenthash].js',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				generator: {
					filename: '[name].[contenthash].css',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	optimization: {
		minimize: true,
	},
};

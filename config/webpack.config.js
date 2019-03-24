const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// console.log()

module.exports = (env) => {
	let devtool;
	if (env.test) {
		// 测试环境
		devtool = 'hidden-source-map'
	} else if (env.dev){
		// 开发环境
		devtool = 'inline-source-map'
	} else {
		// 正式环境
		devtool = undefined
	}
	return {
		entry: {
			login: './src/entry/entryLogin.js',
			error404: './src/entry/entry404.js'
		},

		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, '../dist')
		},
		devServer: {
			open: false,
			contentBase: path.resolve(__dirname, '../dist'),
			port: 8080,
			hot: true
		},
		devtool: devtool,
		module: {
			rules: [
				{
					test: /\.(css)$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.(less)$/,
					use: ['style-loader', 'css-loader', 'less-loader']
				},
				{
					test: /\.(png|jpg|svg|gif)$/,
					use: ['url-loader']
				},
				{
					test: /\.(js)$/,
					loader: 'babel-loader',
					include: [path.resolve(__dirname, "../src")],
					options: {
						presets: ["@babel/env", "@babel/react"]
					}
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				filename: 'public/view/login.html',
				template: 'public/view/login.html',
				chunks: ['login']
			}),
			new HtmlWebpackPlugin({
				filename: 'public/view/404.html',
				template: 'public/view/404.html',
				chunks: ['error404']
			})
		],
	}
}

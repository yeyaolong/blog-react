const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
    devServer: {
		open: false,
		contentBase: path.resolve(__dirname, '../dist'),
		port: 8081,
        hot: true
	},
    devtool: "inline-source-map",
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
			filename: 'public/view/index.html',
			template: 'public/view/index.html',
			chunks: ['app']
		})
	],
	
}
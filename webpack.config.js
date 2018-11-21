const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const extractCSS = new ExtractTextPlugin('style.css')
const conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		// publicPath: 'dist/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader', 'postcss-loader'],
				}),
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[path][name].[ext]',
							fallback: 'file-loader',
						},
					},
				],
			},
		],
	},
	plugins: [
		// new ExtractTextPlugin('styles.css'),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		extractCSS,
	],
}

module.exports = (env, options) => {
	const production = options.mode === 'production'

	conf.devtool = production ? 'source-map' : 'eval-sourcemap'

	return conf
}

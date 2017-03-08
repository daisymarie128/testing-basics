var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	inject: 'body',
	template: `${__dirname}/app/index.html`,
	output: 'index.html'
});

module.exports = {
	entry: [
	 './app/index.js',
	 './app/main.scss'
 ],
 output: {
  path: `${__dirname}/dist`,
  filename: 'bundle.js'
 },
	module: {
    rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader'
					}, {
						test: /\.scss$/,
						use: ['style-loader', 'css-loader', 'sass-loader']
					}, {
						test: /\.jpe?g$|\.gif$|\.png$/i,
						loader: 'file-loader?regExp=(image.*)&name=[1]'
					}
    ]
  },
	plugins: [
		HTMLWebpackPluginConfig
	]
};

const path = require('path');

module.exports = {
	cache: true,
  devtool: 'eval',
  progress: true,

	entry: [
		'./client/scripts/main.js'
	],

	output: {
		path: path.join(__dirname),
		publicPath: '/build/',
    filename: 'bundle.js',
	},

	module: {
		loaders: [

		]
	}
};

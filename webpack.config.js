const path = require('path');

module.exports = {
	cache: true,
  devtool: 'eval',
  progress: true,

	entry: 'XXXXXXX',

	output: {
		path: path.join(__dirname),
		publicPath: '/build/',
    filename: 'XXXXXXX',
	},

	module: {
		loaders: [

		]
	}
};

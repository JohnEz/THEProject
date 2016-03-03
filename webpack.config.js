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
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
        test: /\.js$/,
        loader: 'babel',
				exclude: /node_modules/,
        include: path.resolve(__dirname, "client/"),
        query: { presets: ['es2015'] }
      },
      {
        test: /\.html$/,
        loader: 'html',
        include: path.resolve(__dirname, "client/")
      }
		]
	}
};

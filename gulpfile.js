
const gulp = require('gulp');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const liveServer = require('gulp-live-server');

const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const stream = require('webpack-stream');

const webpackPort = 9000;
const serverPort = 8000;

const paths = {
   HTML: 'index.html',
   JS: ['client/**/*.js'],
   BUILD: 'build',
   SERVER: 'server.js'
 };


 /*
  * MAIN TASKS
  */
gulp.task('default', ['webpack-dev-server', 'server']);
gulp.task('compile', ['webpack']);

gulp.task('server', function() {
  const server = liveServer.new('server.js');
  server.start();
});


/*
 * WEBPACK STUFF
 */

gulp.task('webpack', [], function() {
  return gulp.src(paths.JS) // gulp looks for all source files under specified path
    .pipe(stream(webpackConfig)) // blend in the webpack config into the source files
    .pipe(uglify())
    .pipe(gulp.dest(paths.BUILD));
});

gulp.task('webpack-dev-server', function(callback) {
  // modify some webpack config options
  const config = Object.create(webpackConfig);
  config.devtool = 'inline-source-map';
  config.debug = true;

  // Start a webpack-dev-server which will serve our assets, letting it deal with
  // live-reloading for us.
  new WebpackDevServer(webpack(config), {
    // Tell wepback to pass (proxy) all requests to our server
    proxy: {
      '*' : `http://localhost:${serverPort}`
    }
  }).listen(webpackPort, 'localhost');
});

var plugins    = require('gulp-load-plugins')();
var gulp       = require('gulp');
var bowerFiles = require('main-bower-files');
var del        = require('del');

gulp.task('clear:libs', function() {
	del.sync('public/lib/');
});

gulp.task('bower', ['clear:libs'], function() {
	var jsFilter  = plugins.filter('**/*.js');
	var cssFilter = plugins.filter('**/*.css');

	return gulp.src(bowerFiles())
		.pipe(jsFilter)
		.pipe(gulp.dest('public/lib/js'))
		.pipe(jsFilter.restore())
		.pipe(cssFilter)
		.pipe(gulp.dest('public/lib/css'));
});


var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');
});

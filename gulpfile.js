var gulp 		= require('gulp');
var gulpSass 	= require('gulp-sass');
var rimraf 		= require('rimraf');
var sequence 	= require('run-sequence');
var merge		= require('merge-stream');
var runElectron = require('gulp-run-electron');


gulp.task('sass', function() {
	return gulp.src(['./src/sass/*.scss'])
		.pipe(gulpSass())
		.pipe(gulp.dest('./src'));
});
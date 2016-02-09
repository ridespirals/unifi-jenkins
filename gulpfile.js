var gulp 		= require('gulp');
var gulpSass 	= require('gulp-sass');
var rimraf 		= require('rimraf');
var sequence 	= require('run-sequence');
var merge		= require('merge-stream');
var runElectron = require('gulp-run-electron');

gulp.task('app', function() {
	gulp.src('src')
		.pipe(runElectron([], { cwd: 'src' }));
});


gulp.task('sass', function() {
	return gulp.src(['./src/sass/*.scss'])
		.pipe(gulpSass())
		.pipe(gulp.dest('./src'));
});

gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', ['sass', runElectron.rerun]);
});

gulp.task('default', function() {
	sequence(['sass'], ['watch', 'app']);
});
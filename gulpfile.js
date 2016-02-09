var gulp 		= require('gulp');
var gulpSass 	= require('gulp-sass');
var rimraf 		= require('rimraf');
var sequence 	= require('run-sequence');
var merge		= require('merge-stream');
var runElectron = require('gulp-run-electron');

gulp.task('run-app', function() {
	gulp.src('dist')
		.pipe(runElectron([], { cwd: 'dist' }));
});

gulp.task('copy', function() {
	var html = gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));

	var js = gulp.src('src/**/*.js')
		.pipe(gulp.dest('dist'));

	var pkg = gulp.src('src/package.json')
		.pipe(gulp.dest('dist'));

	return merge(html, js, pkg);
});

gulp.task('sass', function() {
	return gulp.src(['./src/sass/*.scss'])
		.pipe(gulpSass())
		.pipe(gulp.dest('./dist'));
});

gulp.task('clean', function(cb) {
	return rimraf('dist', cb);
});

gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', ['sass', runElectron.rerun]);
	gulp.watch(['src/**/*.html', 'src/**/*.js'], ['copy', runElectron.rerun]);
});

gulp.task('default', function() {
	sequence(['clean'], ['sass', 'copy'], ['watch', 'run-app']);
});
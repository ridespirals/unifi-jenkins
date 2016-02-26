var gulp 		= require('gulp');
var gulpSass 	= require('gulp-sass');
var rimraf 		= require('rimraf');
var sequence 	= require('run-sequence');
var merge		= require('merge-stream');
var runElectron = require('gulp-run-electron');
var useref		= require('gulp-useref');
var neat		= require('node-neat').includePaths;

gulp.task('run-app', function() {
	gulp.src('dist')
		.pipe(runElectron([], { cwd: 'dist' }));
});

gulp.task('electron', function() {
	var js = gulp.src('src/main.js')
		.pipe(gulp.dest('dist'));
	var pkg = gulp.src('src/package.json')
		.pipe(gulp.dest('dist'));
	return merge(js, pkg);
});

gulp.task('copy', function() {
	return gulp.src('src/**/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
	return gulp.src(['./src/sass/*.scss'])
		.pipe(gulpSass({
			includePaths: [].concat(neat)
		}).on('error', gulpSass.logError))
		.pipe(gulp.dest('./dist'));
});

gulp.task('clean', function(cb) {
	return rimraf('dist', cb);
});

gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', ['sass', runElectron.rerun]);
	gulp.watch(['src/**/*.html', 'src/**/*.js'], ['copy', runElectron.rerun]);
});

gulp.task('build', function() {
	sequence(['clean'], ['sass', 'copy', 'electron']);
});

gulp.task('default', function() {
	sequence(['clean'], ['sass', 'copy', 'electron'], ['watch', 'run-app']);
});

gulp.task('help', function() {
	var chalk = require('chalk');
	console.log('');
	console.log(chalk.bold('Unifi Monitor - Electron'));
	console.log(chalk.cyan('  gulp '), 'Build and watch for changes, and run application');
	console.log(chalk.cyan('  gulp build '), 'Build application to ', chalk.yellow('dist'));
	console.log(chalk.cyan('  gulp run-app '), 'Start the application currently in ', chalk.yellow('dist'));
	console.log('');
});
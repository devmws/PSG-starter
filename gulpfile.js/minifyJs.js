/* This task supposed to minify the javascript files.
feel free to change the src/dest */

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

module.exports = () => {
	return gulp
		.src([
			'./src/scripts/**/*.js',
			'./node_modules/bootstrap/dist/js/bootstrap.bundle.js',
		])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./dist/scripts/'))
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./dist/scripts/'));
};

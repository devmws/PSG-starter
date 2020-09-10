/* This task supposed to minify the javascript files.
feel free to change the src/dest */

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

let minifyJs = () => {
	return gulp
		.src('./src/scripts/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/scripts/'));
};

module.exports = minifyJs;
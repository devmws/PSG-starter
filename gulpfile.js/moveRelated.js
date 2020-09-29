/* This task supposed to transfer fonts form src/fonts to dist/fonts.
feel free to change the src/dest */

const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = () => {
	return gulp
		.src('./src/fonts/*.*')
		.pipe(plumber())
		.pipe(gulp.dest('./dist/fonts'));
};

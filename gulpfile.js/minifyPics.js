/* This task supposed to compress all pictures and images.
feel free to change the src/dest */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

let minifyPics = () => {
	return gulp
		.src('./src/media/**/*.*')
		.pipe(plumber())
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest('./dist/media'));
};

module.exports = minifyPics;

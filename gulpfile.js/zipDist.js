/* This task supposed to zip-compress 'dist' folder, to generate a single .zip file.
feel free to change the src/dest */

const gulp = require('gulp');
const zip = require('gulp-zip');

let zipDist = () => {
	return gulp
		.src('./dist/**/*.*')
		.pipe(zip('dist.zip'))
		.pipe(gulp.dest('.'));
}

module.exports = zipDist;
/* This task supposed to zip-compress the whole project as a development environment, to generate a single .zip file.
feel free to change the src/dest */

const gulp = require('gulp');
const zip = require('gulp-zip');
const plumber = require('gulp-plumber');

module.exports = () => {
	return gulp
		.src([
			'./**/*.*',
			'!./node_modules/**/*.*',
			'!./dist/**/*.*',
			'!./development.zip',
		])
		.pipe(plumber())
		.pipe(zip('development.zip'))
		.pipe(gulp.dest('./'));
};

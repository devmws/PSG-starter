/* This task supposed to zip-compress the whole project as a production environment, to generate a single .zip file.
feel free to change the src/dest */

const gulp = require('gulp');
const zip = require('gulp-zip');
const plumber = require('gulp-plumber');

module.exports = () => {
	return gulp
		.src(['./dist/**/*.*', '!./dist/production.zip'])
		.pipe(plumber())
		.pipe(zip('production.zip'))
		.pipe(gulp.dest('./dist/'));
};

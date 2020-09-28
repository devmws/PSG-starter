/* This task supposed to compile all PUG files into HTML.
feel free to change the src/dest */

const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');

let compilePug = () => {
	return gulp
		.src('./src/markup/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest('./dist'));
};

module.exports = compilePug;

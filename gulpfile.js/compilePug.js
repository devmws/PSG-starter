/* This task supposed to compile all PUG files into HTML. 
feel free to change the src/dest */

const gulp = require('gulp');
const pug = require('gulp-pug');

let compilePug = () => {
	return gulp
		.src('./src/pug/pages/*.pug')
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest('./dist'));
};

module.exports = compilePug;

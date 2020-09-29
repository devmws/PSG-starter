/* This task supposed to delete the dist folder.
feel free to adjust the path of the generated dist folder */

const gulp = require('gulp');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');

module.exports = () => {
	return gulp.src('./dist/', { read: false }).pipe(plumber()).pipe(clean());
};

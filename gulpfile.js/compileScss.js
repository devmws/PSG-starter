/* This task supposed to compile the main scss file to generate a pure css file,
then, auto prefix it in addition to adding the sourceMap for it.
feel free to change the src/dest */

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

let compileScss = () => {
	return gulp
		.src('./src/styles/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(concat('main.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/pages'));
};

module.exports = compileScss;

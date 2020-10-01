/* This task supposed to compile the main scss file to generate a pure css file,
then, auto prefix it in addition to adding the sourceMap for it.
feel free to change the src/dest */

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
	return gulp
		.src('./src/styles/main.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'expanded',
				data: {
					mediaPath: process.env.MEDIA_PATH_PROD,
					stylesPath: process.env.STYLES_PATH_PROD,
					scriptsPath: process.env.SCRIPTS_PATH_PROD,
				},
			})
		)
		.pipe(autoprefixer('last 2 versions'))
		.pipe(concat('main.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`./dist/${process.env.STYLES_PATH_PROD}`))
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(`./dist/${process.env.STYLES_PATH_PROD}`));
};

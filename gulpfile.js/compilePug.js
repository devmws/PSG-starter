/* This task supposed to compile all PUG files into HTML.
feel free to change the src/dest */

const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
	return gulp
		.src('./src/markup/pages/*.pug')
		.pipe(plumber())
		.pipe(
			pug({
				pretty: true,
				data: {
					mediaPath: process.env.MEDIA_PATH_PROD,
					stylesPath: process.env.STYLES_PATH_PROD,
					scriptsPath: process.env.SCRIPTS_PATH_PROD,
					fontAwesomeCDN: process.env.FONT_AWESOME_CDN,
					jqueryCDN: process.env.JQUERY_CDN
				},
			})
		)
		.pipe(gulp.dest('./dist'));
};

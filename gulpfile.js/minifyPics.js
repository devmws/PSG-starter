/* This task supposed to compress all pictures and images.
feel free to change the src/dest */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

let minifyPics = () => {
	return gulp
		.src(['./src/images/*.*', './../src/images/**/*.*'])
		.pipe(
			imagemin({
				verbose: true,
			})
		)
		.pipe(gulp.dest('./dist/images/'));
};

module.exports = minifyPics;

/* This task supposed to zip-compress 'src' folder along side with other needed files for delivering 
the entire working space to generate a single .zip file.
feel free to change the src/dest */

const gulp = require('gulp');
const zip = require('gulp-zip');

let zipSrc = () => {
	return gulp.src([
    './gulpfile.js', 
    './src', 
    './package.json', 
    './package-lock.json',
    ]).pipe(zip('src.zip'))
    .pipe(gulp.dest('.'));
}

module.exports = zipSrc;
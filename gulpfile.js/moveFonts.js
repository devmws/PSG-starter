/* This task supposed to transfer fonts form src/fonts to dist/fonts.
feel free to change the src/dest */

const gulp = require('gulp');

let moveFonts = async (cb) => {
  return gulp
    .src('./src/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'))
};

module.exports = moveFonts;
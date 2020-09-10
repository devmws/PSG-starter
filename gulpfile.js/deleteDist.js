/* This task supposed to delete the dist folder.
feel free to adjust the path of the generated dist folder */

const gulp = require('gulp');
const clean = require('gulp-clean');

let deleteDist = () => {
  return gulp
    .src('./dist/', { read: false })
    .pipe(clean());
};

module.exports = deleteDist;
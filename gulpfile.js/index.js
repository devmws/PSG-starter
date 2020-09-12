const compilePug = require('./compilePug');
async function compilePugTask() {	return compilePug() };
exports.compilePug = compilePugTask;

const compileScss = require('./compileScss');
async function compileScssTask() {	return compileScss() };
exports.compileScss = compileScssTask;

const minifyJs = require('./minifyJs');
async function minifyJsTask() {	return minifyJs() };
exports.minifyJs = minifyJsTask;

const moveFonts = require('./moveFonts');
async function moveFontsTask() { return moveFonts() };
exports.moveFonts = moveFontsTask;

const minifyPics = require('./minifyPics');
async function minifyPicsTask() {	return minifyPics() };
exports.minifyPics = minifyPicsTask;

const deleteDist = require('./deleteDist');
async function deleteDistTask() {	return deleteDist() };
exports.deleteDist = deleteDistTask;

const zipSrc = require('./zipSrc');
async function zipSrcTask() {	return zipSrc() };
exports.zipSrc = zipSrcTask;

const zipDist = require('./zipDist');
async function zipDistTask() { return zipDist() };
exports.zipDist = zipDistTask;

// Watchers, custom tasks, and live-reload server
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
exports.generateDistFolder = gulp.parallel(compilePugTask, compileScssTask, minifyJsTask, moveFontsTask, minifyPicsTask);
let watchTask = async () => {
  browserSync.init({ server: { baseDir: './dist' } });
  gulp.watch('./src/pug/**/*.pug', compilePugTask);
  gulp.watch(['./src/styles/*.scss', './src/styles/**/*.scss'], compileScssTask);
  gulp.watch('./src/fonts/*.*', moveFontsTask);
  gulp.watch(['./src/images/*.*', './src/images/**/*.*'], minifyPicsTask);
  gulp.watch('./src/scripts/*.*', minifyJsTask);
  gulp.watch('./dist/*.*').on('change', browserSync.reload);
};
exports.default = watchTask;

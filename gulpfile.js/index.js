const compilePug = require('./compilePug');
async function compilePugTask() {
	return compilePug();
}
exports.compilePug = compilePugTask;

const compileScss = require('./compileScss');
async function compileScssTask() {
	return compileScss();
}
exports.compileScss = compileScssTask;

const minifyJs = require('./minifyJs');
async function minifyJsTask() {
	return minifyJs();
}
exports.minifyJs = minifyJsTask;

const moveRelated = require('./moveRelated');
async function moveRelatedTask() {
	return moveRelated();
}
exports.moveRelated = moveRelatedTask;

const minifyPics = require('./minifyPics');
async function minifyPicsTask() {
	return minifyPics();
}
exports.minifyPics = minifyPicsTask;

const deleteDist = require('./deleteDist');
async function deleteDistTask() {
	return deleteDist();
}
exports.deleteDist = deleteDistTask;

const zipProd = require('./zipProd');
async function zipProdTask() {
	return zipProd();
}
exports.zipProd = zipProdTask;

const zipDev = require('./zipDev');
async function zipDevTask() {
	return zipDev();
}
exports.zipDev = zipDevTask;

// Watchers, custom tasks, and live-reload server
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
exports.generateDistFolder = gulp.parallel(
	compilePugTask,
	compileScssTask,
	moveRelatedTask,
	minifyPicsTask,
	minifyJsTask
);
let watchTask = async () => {
	browserSync.init({ server: { baseDir: './dist' } });
	gulp.watch('./src/markup/**/*.pug', compilePugTask);
	gulp.watch('./src/styles/**/*.scss', compileScssTask);
	gulp.watch('./src/fonts/**/*.*', moveRelatedTask);
	gulp.watch('./src/media/**/*.*', minifyPicsTask);
	gulp.watch('./src/scripts/*.*', minifyJsTask);
	gulp.watch('./dist/**/*.*').on('change', browserSync.reload);
};
exports.default = watchTask;

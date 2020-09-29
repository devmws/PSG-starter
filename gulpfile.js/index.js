// Importing main tasks
const compilePug  = () => { return require('./compilePug')() };
const compileScss = () => { return require('./compileScss')() };
const minifyJs    = () => { return require('./minifyJs')() };
const moveRelated = () => { return require('./moveRelated')() };
const minifyPics  = () => { return require('./minifyPics')() };
const deleteDist  = () => { return require('./deleteDist')() };
const zipProd     = () => { return require('./zipProd')() };
const zipDev      = () => { return require('./zipDev')(); };

// Watchers, initialization and custom tasks, and live-reload server
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const generateDistFolder = gulp.parallel(
	compilePug,
	compileScss,
	moveRelated,
	minifyPics,
	minifyJs
);
const watcher = async () => {
	browserSync.init({ server: { baseDir: './dist' } });
	gulp.watch('./src/markup/**/*.pug', compilePug);
	gulp.watch('./src/styles/**/*.scss', compileScss);
	gulp.watch('./src/fonts/**/*.*', moveRelated);
	gulp.watch('./src/media/**/*.*', minifyPics);
	gulp.watch('./src/scripts/*.*', minifyJs);
	gulp.watch('./dist/**/*.*').on('change', browserSync.reload);
};

// Export all tasks
module.exports = {
	compilePug,
	compileScss,
	minifyJs,
	moveRelated,
	minifyPics,
	deleteDist,
	zipProd,
	zipDev,
	generateDistFolder,
	default: watcher
};

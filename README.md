![](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Clarifying the definition

> [_PSG_](https://github.com/mw-shublaq/psg-starter) is a shorthand of three separated web development techniques represented in:

- [**P**UG](https://pugjs.org/api/getting-started.html) - HTML Template engine (Aka Jade)
- [**S**CSS](https://sass-lang.com/) - CSS Preprocessor language
- [**G**ulp](https://gulpjs.com/) - Task runner

# Overview ![](https://img.shields.io/badge/Version-1.7-green.svg) ![](https://img.shields.io/badge/Size-~150%20KB-green.svg)

_PSG_ has been developed over the node package manager **(NPM)**, the main purpose of it is to be a simple, **scalable**, clear, optimized, and time-saving starter project for web developers, especially the Front-End ones who would like to work on a tidy and professional structure with no DRY code which follows the best practice.

_PSG_ repository supposed to receive frequently updates to make sure that it always has the latest stable versions of the packages in use, also to make sure that it smoothly-running the commonly used productivity tasks which helps the developers to stay focused on the code without paying attention to any outer time-consuming operations.

# Technically, what can _PSG_ do?

> With the help of GULP, PSG can do the following:

1. Compiling .PUG pages into plain HTML which the browser can render.

2. Compiling .SCSS styles to plain CSS which the browser can read.

3. Minifying all file types as follows:

   - For CSS, Merging all \*.scss files and generate from them only one .css file which will be compiled and minified.
   - For JS, Merging all \*.js files and generate from them only one .js file which will be minified.
   - For Media, Compressing all images without touching the quality.

4. Creating a live preview server locally which detects any changes on the code.

5. Copying fonts directory along side other important folders from /src (if there were any), to /dist.

6. Compressing the project (as a development version) to be ready and easy for sharing.

7. Compressing the project (as a production version) to be ready and easy for sharing.

When working with files, you will notice that we followed the rule of _Divide and conquer_, since there is a separate Js file for each task, which would make the process much easier when testing, executing and debugging.

All of the tasks above are linked with **_Watchers_**, which means any change will be detected immediately and apply the corresponding tasks for it.

---

_PSG_ is using number of development dependencies, here are they:
| Plugin name | source | version |
| ------- | ------- | ------ |
| browser-sync | https://www.npmjs.com/package/browser-sync | ^2.26.12
| gulp | https://www.npmjs.com/package/gulp | ^4.0.2
| gulp-autoprefixer | https://www.npmjs.com/package/gulp-autoprefixer | ^7.0.1
| gulp-clean | https://www.npmjs.com/package/gulp-clean | ^0.4.0
| gulp-concat | https://www.npmjs.com/package/gulp-concat | ^2.6.1
| gulp-imagemin | https://www.npmjs.com/package/gulp-imagemin | ^7.1.0
| gulp-plumber | https://www.npmjs.com/package/gulp-plumber | ^1.2.1
| gulp-pug | https://www.npmjs.com/package/gulp-pug | ^4.0.1
| gulp-rename | https://www.npmjs.com/package/gulp-rename | ^2.0.0
| gulp-sass | https://www.npmjs.com/package/gulp-sass | ^4.1.0
| gulp-sourcemaps | https://www.npmjs.com/package/gulp-sourcemaps | ^2.6.5
| gulp-uglify | https://www.npmjs.com/package/gulp-uglify | ^3.0.2"
| gulp-zip | https://www.npmjs.com/package/gulp-zip | ^5.0.2
<br>

and as dependency:
| Plugin name | source | version |
| ------- | ------- | ------ |
| Bootstrap | https://getbootstrap.com | ^4.5
Bootstrap is our main CSS framework, and it can be very easily unintegrated if you wish not using it.
# Installation

PSG requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd psg-starter
$ npm i
$ gulp
```

after executing the above commands, if everything goes well with you, your default browser will be automatically opened and navigating to the server which just created locally.
All what you need to do now is to **save** (even if there was no changes made) any scss/js in /src directory. this step is just to wake up the watchers in order to produce the dist/ directory.

# License ![](https://img.shields.io/pypi/l/ansicolortags.svg) ![](https://badgen.net/badge/Open%20Source/Yes%21/blue?icon=github)

---

MIT - Massachusetts Institute of Technology

**Free Software, Hell Yeah!**

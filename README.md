![](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white) ![](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
# Clarifying the definition 
---
> [*PSG*](https://github.com/mw-shublaq/psg-starter) is a shorthand of three separated web development techniques represented in:
- [**P**UG](https://pugjs.org/api/getting-started.html) - HTML Template engine (Aka Jade)
- [**S**CSS](https://sass-lang.com/) - CSS Preprocessor language
- [**G**ulp](https://gulpjs.com/) - Task runner


# Overview ![](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github) ![](https://img.shields.io/badge/Version-1.0.0-green.svg)


---
*PSG* has been developed over the node package manager **(NPM)**, the main purpose of it is to be a simple, clear, optimized, and time-saving starter project for web developers, especially the Front-End ones who would like to work on a tidy structure that follows the best practice.

*PSG* repository will receive monthly updates to make sure that it always has the latest stable versions of the packages in use.
# Technically, what *PSG* can do? [![Only 37 Kb](https://badge-size.herokuapp.com/Naereen/StrapDown.js/master/strapdown.min.js)](https://github.com/Naereen/StrapDown.js/blob/master/strapdown.min.js)

> With the help of GULP tasks, PSG can do the following:
1. Compiling .PUG pages into plain HTML which the browser can render.
2. Compiling .SCSS styles to plain CSS which the browser can read.
3. Minifying all file types as follows:
   - For CSS, Generating only one .scss file which will be compiled and minified.
   - For JS, Minifying all JavaScript files.
   - For Media, Compressing all images without touching the quality.
4. Creating a live preview server locally which detects any changes on the code.
5. Copying fonts directory along side other important folders from /src (if there were any), to /dist.
6. Compressing /dist directory into a Zip file.
7. Compressing /src directory into a Zip file.

When working with files, you will notice that we followed the rule of *Divide and conquer*, since there is a separate Js file for each task, which would make the process much easier when testing, executing and debugging.

All of the tasks above are linked with ***Watchers***, which means any change will be detected immediately and apply the corresponding tasks for it.

---
*PSG* is using number of development dependencies and packages, here are they:
| Plugin name | source | version |
| ------- | ------- |   ------ |
| browser-sync | https://www.npmjs.com/package/browser-sync | ^2.26.12
| gulp | https://www.npmjs.com/package/gulp | ^4.0.2
| gulp-autoprefixer | https://www.npmjs.com/package/gulp-autoprefixer | ^7.0.1
| gulp-clean | https://www.npmjs.com/package/gulp-clean | ^0.4.0
| gulp-concat | https://www.npmjs.com/package/gulp-concat | ^2.6.1
| gulp-imagemin | https://www.npmjs.com/package/gulp-imagemin | ^7.1.0
| gulp-pug | https://www.npmjs.com/package/gulp-pug | ^4.0.1
| gulp-sass | https://www.npmjs.com/package/gulp-sass | ^4.1.0
| gulp-sourcemaps | https://www.npmjs.com/package/gulp-sourcemaps | ^2.6.5
| gulp-uglify | https://www.npmjs.com/package/gulp-uglify | ^3.0.2"
| gulp-zip | https://www.npmjs.com/package/gulp-zip | ^5.0.2

# Installation
---
PSG requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd psg-starter
$ npm i
$ gulp
```
after executing the above commands, if everything goes well with you, it will automatically open the default browser on your system and navigate to the server which just created locally.
All that you need to do now is applying some changes, then the watchers will start running. 

# License ![](https://img.shields.io/pypi/l/ansicolortags.svg)

----

MIT - Massachusetts Institute of Technology

**Free Software, Hell Yeah!**

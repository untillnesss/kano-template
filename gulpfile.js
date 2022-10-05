const { src, dest, parallel, watch } = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require( 'gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

//create folder
function folder(){
  return src('*.*', { read: false })
  .pipe(dest('./app'))
  .pipe(dest('./app/template'))
  .pipe(dest('./app/pages'))
  .pipe(dest('./sandbox/_test'))
  .pipe(dest('./assets'))
  .pipe(dest('./assets/sass'))
  .pipe(dest('./assets/css'))
  .pipe(dest('./assets/js'))
  .pipe(dest('./assets/img'))
  .pipe(notify({
      message: 'Folder wis dadi'
  }));
};


//nunjucks dir
var COMPILE = {
  SRC: './app/pages/**/*.+(html|njk)',
  TMP: './app/template/',
  DST: './app/html'
};

//dir
var DIR = {
  CSS: './app/src/css/',
  JS: './app/src/js/',
  SASS: './app/src/sass/*.scss',
  IMG:'./app/src/img/'
}

//compile nunjucks
function nunjucks() {
  return src(COMPILE.SRC)
      .pipe(nunjucksRender({
          path: [COMPILE.TMP]
      }))
      .pipe(dest(COMPILE.DST));
};

//compile & minify css
function minify() {
  return src(DIR.SASS)
      .pipe(sass({
          errorLogToConsole: true
      }))
      .on('error', console.error.bind(console))
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(postcss([tailwindcss(),autoprefixer(), cssnano(),]))
      .pipe(dest(DIR.CSS))
      .pipe(notify({
          message: 'Minify'
      }));
}

//watching
function watching() {
  //nunjucks();

  browserSync.init({
      server: {
          baseDir: "./",
          serveStaticOptions: {
            extensions: ['html']
        }
      },
      startPath: 'app/html',
      port: 3000
  });

  //watch(DIR.SASS, minify).on('change', browserSync.reload);
  watch(COMPILE.SRC, nunjucks).on('change', browserSync.reload);
};

exports.folder=folder;
exports.render = nunjucks;
exports.minify = minify;
exports.default = watching;
const gulp = require('gulp')
const { series } = require('gulp');
const { watch } = require('gulp')
const rename = require('gulp-rename')
const prefix = require('gulp-autoprefixer')
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass')

sass.compiler = require('node-sass')

function css(fileName) {
  return gulp.src(`./src/sass/${fileName}.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'))
}

function cssFull() {
  return css('styles')
}

function cssSlim() {
  return css('styles-slim')
}

function copyFonts() {
  return gulp.src(['./src/fonts/**/*'])
    .pipe(gulp.dest('./dist/fonts/'))
}

function copyLogos() {
  return gulp.src(['./src/logos/**/*'])
    .pipe(rename((path) => {
      const cleanName = (name) => {
        return name
          .replace(/\s/g, '-')
          .replace(/\'/g, '-')
          .replace(/\_/g, '-')
          .toLowerCase()
      }

      path.dirname = cleanName(path.dirname)
      path.basename = cleanName(path.basename)

    }))
    .pipe(gulp.dest('./dist/'))
}

exports.build = series(cssFull, cssSlim, copyFonts, copyLogos)

exports.default = () => {
  watch('./src/sass/**/*.scss', cssFull);
  watch('./src/fonts/**/*', copyFonts);
  watch('./src/logos/**/*', copyLogos);
};

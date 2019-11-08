const gulp = require('gulp')
const { series } = require('gulp');
const { watch } = require('gulp')
const rename = require('gulp-rename')
const prefix = require('gulp-autoprefixer')
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass')

sass.compiler = require('node-sass')

function css() {
  return gulp.src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'))
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

exports.build = series(css, copyFonts, copyLogos)

exports.default = () => {
  watch('./src/sass/**/*.scss', css);
  watch('./src/fonts/**/*', copyFonts);
  watch('./src/logos/**/*', copyLogos);
};

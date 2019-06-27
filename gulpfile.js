const gulp = require('gulp')
const { watch } = require('gulp')
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

exports.default = () => {
  watch('./src/sass/**/*.scss', css);
  watch('./src/fonts/**/*', copyFonts);
};

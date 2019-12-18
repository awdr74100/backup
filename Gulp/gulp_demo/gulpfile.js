const gulp = require('gulp');
// const pug = require('gulp-pug');
// const sass = require('gulp-sass');
// const babel = require('gulp-babel');
// const postcss = require('gulp-postcss');
// const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const $ = require('gulp-load-plugins')();

// pug
gulp.task('pug', function buildHTML() {
  return gulp
    .src('./source/**/*.pug')
    .pipe($.plumber())
    .pipe(
      $.pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest('./public'));
});

// sass
$.sass.compiler = require('node-sass');
gulp.task('sass', function() {
  return gulp
    .src('./source/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss([autoprefixer]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

// babel
gulp.task('babel', () =>
  gulp
    .src('./source/js/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(
      $.babel({
        presets: ['@babel/env'],
      })
    )
    .pipe($.sourcemaps.write())
    .pipe($.concat('all.js'))
    .pipe(gulp.dest('./public/js'))
);

// watch
gulp.task('watch', function() {
  gulp.watch('source/**/*.pug', gulp.series('pug'));
  gulp.watch('source/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('source/js/**/*.js', gulp.series('babel'));
});

gulp.task('default',gulp.series('pug','sass','babel','watch'))
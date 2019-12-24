const gulp = require('gulp');
// const pug = require('gulp-pug');
// const sass = require('gulp-sass');
// const babel = require('gulp-babel');
// const postcss = require('gulp-postcss');
// const plumber = require('gulp-plumber');
// let cleanCSS = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')();
const minimist = require('minimist');
// const envOptions = {
//   string: 'env',
//   default: { env: 'develop' },
// };
const options = minimist(process.argv.slice(2));
console.log(options);

// pug
gulp.task('pug', function buildHTML() {
  return gulp
    .src('./source/**/*.pug')
    .pipe($.plumber())
    .pipe(
      $.data(() => {
        let list = require('./source/data/list.json');
        let source = {
          list: list,
        };
        // console.log(source);
        return source;
      })
    )
    .pipe(
      $.pug({
        pretty: true,
      })
    )
    .pipe(
      $.htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

// sass
$.sass.compiler = require('node-sass');
gulp.task('sass', function() {
  return gulp
    .src('./source/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/bootstrap/scss'],
      }).on('error', $.sass.logError)
    )
    .pipe($.postcss([autoprefixer]))
    .pipe($.if(options.env === 'production', $.cleanCss()))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
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
    .pipe($.concat('all.js'))
    .pipe(
      $.if(
        options.env === 'production',
        $.uglify({
          compress: {
            drop_console: true,
          },
        })
      )
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
);

// imagemin
gulp.task('imagemin', function(done) {
  gulp
    .src('source/img/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('public/img/'));
  done();
});

// Static server
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir: './public',
//     },
//   });
// });

gulp.task('vendorsJs', (done) => {
  gulp
    .src([
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      './node_modules/jquery/dist/jquery.min.js',
      './source/js/*.js',
    ])
    .pipe($.order(['jquery.min.js', 'bootstrap.bundle.min.js', 'all2.js', 'all.js']))
    .pipe($.concat('vendors.js'))
    .pipe(gulp.dest('./public/js'));
  done();
});

gulp.task('clean', function() {
  return gulp.src('public', { read: false, allowEmpty: true }).pipe($.clean());
});

// watch
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './public',
    },
    reloadDebounce: 2000,
  });
  gulp.watch('source/**/*.pug', gulp.series('pug'));
  gulp.watch('source/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('source/js/**/*.js', gulp.series('babel'));
  // gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', 'pug', 'sass', 'babel'));

gulp.task('default', gulp.series('pug', 'sass', 'vendorsJs', 'babel', 'watch'));

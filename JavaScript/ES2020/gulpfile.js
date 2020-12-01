const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

const delTask = async () => {
  return await del(['dist']);
};

const babelTask = () => {
  return gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('dist'));
};

module.exports = {
  compiler: gulp.series(delTask, babelTask),
};

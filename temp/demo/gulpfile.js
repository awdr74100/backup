const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("babel", () =>
  gulp
    .src("./source/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./public/js/"))
);


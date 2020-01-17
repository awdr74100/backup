const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

gulp.task("minify-html", () => {
  return gulp
    .src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("public/"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("source/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("public/css"));
});

gulp.task("minify-js", () => {
  return gulp
    .src("source/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/js"));
});

gulp.task("default", gulp.parallel("minify-html", "minify-css", "minify-js"));

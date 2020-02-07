const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

const sassTask = () => {
  return (
    gulp
      .src("./source/scss/*.scss")
      // .pipe(sourcemaps.init())
      .pipe(rename("all.min.css"))
      .pipe(
        sass({
          includePaths: ["./node_modules/bootstrap/scss"]
        }).on("error", sass.logError)
      )
      .pipe(postcss([autoprefixer()]))
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest("./dist/css"))
  );
};

const watch = () => {
  gulp.watch("./source/**/*.scss", gulp.series(sassTask));
};

exports.default = gulp.series(sassTask, watch);

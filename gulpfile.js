const { src, dest, watch, series } = require("gulp");
const sass = require("sass");
const gulpSass = require("gulp-sass")(sass);
const purgecss = require("gulp-purgecss");

const buildStyles = () => {
  return src("sass/**/*.scss")
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
};

const watchTask = () => {
  watch(["sass/**/*.scss", "*.html"], buildStyles);
};

exports.default = series(buildStyles, watchTask);

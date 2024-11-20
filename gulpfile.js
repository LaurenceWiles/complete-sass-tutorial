const { src, dest, watch, series } = require("gulp");
const sass = require("sass");
const gulpSass = require("gulp-sass")(sass);

const buildStyles = () => {
  return src("shinobi/**/*.scss")
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(dest("css"));
};

const watchTask = () => {
  watch(["shinobi/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);

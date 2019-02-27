const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-minify-css");
const autoprefixer = require("gulp-autoprefixer");

function compile() {
    return gulp
        .src("src/assets/scss/styles.scss")
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(minify())
        .pipe(gulp.dest("./"));
};

function watch() {
    gulp.watch("src/assets/scss/*.scss", compile);
};

exports.compile = compile;
exports.watch = watch;
exports.default = gulp.series(compile, watch);
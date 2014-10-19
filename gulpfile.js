var gulp = require('gulp');
var sweetjs = require("gulp-sweetjs");
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

gulp.task("default", function () {
	console.log("Use `gulp sweet`");
});

gulp.task('sweet', function () {
    gulp.src("in/**/*.sjs")
    .pipe(sourcemaps.init())
    .pipe(sweetjs({
        modules: [],
        readableNames: true
    }))
    .pipe(sourcemaps.write('../sourcemaps'))
    .pipe(gulp.dest('out'));
});

// Sourcemaps actually needs a compiler to work.
// I couldn't find a compiler that made no changes other
// than adding a sourcemap.
// gulp.task('bitter', function () {
// 	gulp.src("in/**/*.sjs")
// 	.pipe(sourcemaps.init())
// 	.pipe(sourcemaps.write('../sourcemaps'))
// 	.pipe(rename({
// 		extname: ".js"
// 	}))
// 	.pipe(gulp.dest('out'))
// });
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bundle', function () {
  return browserify({
    entries: ['js/app.js'],
    debug: true
  }).bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
  gulp.watch('./js/**/*.js', ['bundle']);
});

gulp.task('default', ['bundle', 'watch']);
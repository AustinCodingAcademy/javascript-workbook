const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

gulp.task('build', function() {
  return gulp.src('src/views/*.jsx')
  .pipe(babel({
      presets: ['react']
  }))
  .pipe(gulp.dest('lib/src/views'))
});

var gulp = require('gulp'),
    connect = require('gulp-connect');



gulp.task('reload', function() {
  gulp.src('index.html')
    .pipe(connect.reload());

});

gulp.task('default', function() {
  
  connect.server({
    root: './',
    livereload: true
  });

  gulp.watch('**/*', ['reload']);
});
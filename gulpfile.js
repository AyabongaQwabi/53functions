var gulp = require('gulp'),
qunit = require('gulp-qunit');
gulp.task('test',function(){
      return gulp.src('./your-testfile-name0here.html')
            .pipe(qunit());

});

var conf = require('../config.json');
var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
 
 
gulp.task('usemin', function() {
  return gulp.src(conf.base.build + conf.files.html)
    .pipe(usemin({
      css: [ 'concat', minifyCss(), rev() ],
      js: [ uglify(), rev() ]
    }))
    .pipe(gulp.dest(conf.base.compile));
});
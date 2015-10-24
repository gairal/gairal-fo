var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var htmlhint = require('gulp-htmlhint');
var replace = require('gulp-replace');
var inject = require('gulp-inject');

gulp.task('html:build', function() {
  return gulp.src([conf.base.src + conf.files.html])
    .pipe(fileinclude({prefix: '@@',basepath: '@file'}))
    .pipe(replace('@@appName', pkg.name))
    .pipe(inject(gulp.src(conf.vendor.js, {read: false}, {relative: true})))
    .pipe(htmlhint('./gulp/.htmlhintrc'))
    .pipe(gulp.dest(conf.base.build))
    .pipe(htmlhint.reporter());
});
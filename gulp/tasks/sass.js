var conf = require('../config.json');
var gulp = require('gulp');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');

gulp.task('sass', function () {
    return gulp.src(conf.base.src + conf.path.sass + conf.files.sass)
        .pipe(sass())
        .pipe(csslint('./gulp/.csslintrc'))
        .pipe(gulp.dest(conf.base.build + conf.path.css))
        .pipe(csslint.reporter());
});
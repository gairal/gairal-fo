var conf = require('../config.json');
var gulp = require('gulp');

gulp.task('copy:i18n', function () {
    return gulp.src([
            conf.base.src + conf.path.i18n + conf.files.i18n
        ], {base: './' + conf.base.src})
        .pipe(gulp.dest(conf.base.build));
});

gulp.task('copy:build', function () {
    //Root files
    gulp.src([
            conf.base.src + conf.path.root + conf.files.root, 
            conf.base.src + conf.path.root + conf.files.hidden
        ])
        .pipe(gulp.dest(conf.base.build));
    //Fonts + Translations files + images
    gulp.src([
            conf.base.src + conf.path.fonts + conf.files.fonts,
            conf.base.src + conf.path.i18n + conf.files.i18n,
            conf.base.src + conf.path.images + conf.files.images
        ], {base: './' + conf.base.src})
        .pipe(gulp.dest(conf.base.build));
    //Static + mocks + vendors
    gulp.src([
            conf.base.static + conf.files.static,
            conf.base.mocks + conf.files.mocks
        ], {base: './'})
        .pipe(gulp.dest(conf.base.build));
    //Scripts
    gulp.src(conf.vendor.js, {base: './'})
        .pipe(gulp.dest(conf.base.build));
    gulp.src(conf.vendor.css, {base: './'})
        .pipe(gulp.dest(conf.base.build));
    return gulp.src(conf.vendor.assets, {base: './'})
        .pipe(gulp.dest(conf.base.build));
});

gulp.task('copy:compile', function () {
    //Root files
    gulp.src([
            conf.base.src + conf.path.root + conf.files.root, 
            conf.base.src + conf.path.root + conf.files.hidden
        ])
        .pipe(gulp.dest(conf.base.compile));
    //Fonts + Translations files + images
    gulp.src([
            conf.base.src + conf.path.fonts + conf.files.fonts,
            conf.base.src + conf.path.i18n + conf.files.i18n
        ], {base: './' + conf.base.src})
        .pipe(gulp.dest(conf.base.compile));
    //Static + mocks + html
    return gulp.src([
            conf.base.static + conf.files.static,
            conf.base.mocks + conf.files.mocks
        ], {base: './'})
        .pipe(gulp.dest(conf.base.compile));
});
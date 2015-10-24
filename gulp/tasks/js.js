var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');
var minimist = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};
var options = minimist(process.argv.slice(2), knownOptions);

switch(options.env) {
    case 'prod':
        break;
    case 'dev':
        break;
    case 'mock':
        break;
    default:
        break;
}

gulp.task('js:build', function() {
  gulp.src([conf.base.src + conf.files.js])
    .pipe(replace('@@env', options.env))
    .pipe(replace('@@appName', pkg.name))
    .pipe(replace('@@appVersion', pkg.version))
    .pipe(jshint('./gulp/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(conf.base.build));
});
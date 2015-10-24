var gulp = require('gulp');
var karma = require('karma').Server;

gulp.task('test', function(done) {
  return new karma({
    configFile: require('path').resolve('gulp/karma.conf.js'),
    singleRun: true,
    browserNoActivityTimeout: 15000,
    browserDisconnectTolerance: 5
  }, done).start();
});
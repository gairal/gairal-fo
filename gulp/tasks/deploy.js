var conf = require('../config.json');
var gulp = require('gulp');
var scp = require('gulp-scp2');
var minimist = require('minimist');
var runSequence = require('run-sequence');

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};
var options = minimist(process.argv.slice(2), knownOptions);
var src = conf.base.compile + '/**/*', 
    host, dest;

switch(options.env) {
    case 'prod':
        src = conf.base.compile + '/**/*';
        host = '192.168.102.13';
        dest = '/gairal.com';
        break;
    case 'dev':
        src = conf.base.build + '/**/*';
        host = '192.168.102.17';
        dest = '/staging.gairal.com';
        break;
    default:
        src = conf.base.compile + '/**/*';
        host = '192.168.102.17';
        dest = '/staging.gairal.com';
        break;
}
 
gulp.task('scp', function() {
    return gulp.src(src)
    .pipe(scp({
        host: host,
        username: 'webadmin',
        dest: dest,
        agent: process.env["SSH_AUTH_SOCK"],
        agentForward: true
    }))
    .on('error', function(err) {
        console.log(err);
    });
});

gulp.task('deploy', function (cb){
    runSequence('compile', 'scp', cb);
});
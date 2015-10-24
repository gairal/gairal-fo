GULP

/**
  * Rsync task
*/
/*gulp.task('rsyncIt', function() {
  gulp.src('public/**')
    .pipe(rsync({
      root: 'public',
      hostname: 'example.com',
      destination: '/path/to/site'
    }));
});*/

/**
  * Deploy task
*/
gulp.task('deploy', ['build'],function() {
    gulp.start('rsyncIt');
});


TODO:
- optim translation, cf. AXS
- update doc
- deploy task
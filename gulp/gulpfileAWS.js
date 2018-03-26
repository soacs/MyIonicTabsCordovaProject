var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;
var requireDir = require('require-dir');
requireDir( './gulp/tasks', { recurse: true } );

gulp.task('clean', function () {
    var build = gulp.src('build/*js', {read: false}).pipe(clean());
    return merge(build);
});

gulp.task('clean_zips', function () {
    var zipClean = gulp.src('lambda_zips/*', {read: false}).pipe(clean());
    return merge(zipClean);
});

// Copy dependencies to build/node_modules/ 
gulp.task('copyNpmDependenciesOnly', function() {
    gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
});

gulp.task('allprocess', function(cb) {
    runSequence('processInvite', 'processAccept', cb);
});

gulp.task('alltriggers', function(cb) {
    runSequence('customMessage', 'postAuthenticate', 'postUserConfirmation', 'preAuthenticate', 'registration', cb);
});

gulp.task('allcloudlogic', function(cb) {
    runSequence('acceptFriend', 'allDevice', 'awsCredentials', 'friendList', 'inviteFriend', 'searchUsers', 'sendAlarm', 'sendScheduledAlarm', 'userProfile', cb);
});

gulp.task('all', function(cb) {
    runSequence('alltests', 'allendpoints', 'alltriggers', 'allcloudlogic', cb);
});

gulp.task('ss3', function() {
    return gulp.src('lambda_zips/*')
        .pipe(gulp.dest('C:\\Users\\admin\\Documents\\ss3\\lambda_zip'));
});


gulp.task('default', ['zip']);
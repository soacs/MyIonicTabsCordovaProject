var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_awsCredentials', function() {
    var awsCredentialsLambda = gulp.src('awsCredentialsLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(awsCredentialsLambda, nodeMods);
});

gulp.task('zipIt_awsCredentials', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('awsCredentialsLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('awsCredentials', function(cb) {
    runSequence('build_awsCredentials', 'zipIt_awsCredentials', 'clean', cb);
});

var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_sendMessage', function() {
    var sendMessageLambda = gulp.src('sendMessageLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(sendMessageLambda, nodeMods);
});

gulp.task('zipIt_sendMessage', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('sendMessageLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('sendMessage', function(cb) {
    runSequence('build_sendMessage', 'zipIt_sendMessage', 'clean', cb);
});

gulp.task('build_getMessage', function() {
    var getMessageLambda = gulp.src('getMessageLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(getMessageLambda, nodeMods);
});

gulp.task('zipIt_getMessage', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('getMessageLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('getMessage', function(cb) {
    runSequence('build_getMessage', 'zipIt_getMessage', 'clean', cb);
});
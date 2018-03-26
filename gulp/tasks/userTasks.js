var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_searchUsers', function() {
    var searchUsersLambda = gulp.src('searchUsersLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(searchUsersLambda, nodeMods);
});

gulp.task('zipIt_searchUsers', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('searchUsersLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('searchUsers', function(cb) {
    runSequence('build_searchUsers', 'zipIt_searchUsers', 'clean', cb);
});

gulp.task('build_userProfile', function() {
    var userProfileLambda = gulp.src('userProfileLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(userProfileLambda, nodeMods);
});

gulp.task('zipIt_userProfile', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('userProfileLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('userProfile', function(cb) {
    runSequence('build_userProfile', 'zipIt_userProfile', 'clean', cb);
});


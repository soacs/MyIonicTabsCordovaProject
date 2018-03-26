var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_getFriends', function() {
    var getFriendsLambda = gulp.src('getFriendsLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(getFriendsLambda, nodeMods);
});

gulp.task('build_removeFriend', function() {
    var removeFriendLambda = gulp.src('removeFriendLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(removeFriendLambda, nodeMods);
});

gulp.task('zipIt_getFriends', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('getFriendsLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('zipIt_removeFriend', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('removeFriendLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('getFriends', function(cb) {
    runSequence('build_getFriends', 'zipIt_getFriends', 'clean', cb);
});

gulp.task('removeFriend', function(cb) {
    runSequence('build_removeFriend', 'zipIt_removeFriend', 'clean', cb);
});


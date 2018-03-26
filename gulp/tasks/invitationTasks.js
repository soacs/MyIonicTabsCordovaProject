var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_inviteFriend', function() {
    var inviteFriendLambda = gulp.src('inviteFriendLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(inviteFriendLambda, nodeMods);
});

gulp.task('zipIt_inviteFriend', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('inviteFriendLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('inviteFriend', function(cb) {
    runSequence('build_inviteFriend', 'zipIt_inviteFriend', 'clean', cb);
});

gulp.task('build_getInvitationCount', function() {
    var getInvitationCountLambda = gulp.src('getInvitationCountLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(getInvitationCountLambda, nodeMods);
});

gulp.task('zipIt_getInvitationCount', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('getInvitationCountLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('getInvitationCount', function(cb) {
    runSequence('build_getInvitationCount', 'zipIt_getInvitationCount', 'clean', cb);
});

gulp.task('build_processInvite', function() {
    var processInviteLambda = gulp.src('processInviteLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(processInviteLambda, nodeMods);
});

gulp.task('zipIt_processInvite', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('processInviteLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('processInvite', function(cb) {
    runSequence('build_processInvite', 'zipIt_processInvite', 'clean', cb);
});

gulp.task('build_getInvite', function() {
    var getInviteLambda = gulp.src('getInviteLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(getInviteLambda, nodeMods);
});

gulp.task('zipIt_getInvite', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('getInviteLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('getInvite', function(cb) {
    runSequence('build_getInvite', 'zipIt_getInvite', 'clean', cb);
});


gulp.task('build_getInvites', function() {
    var getInvitesLambda = gulp.src('getInvitesLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(getInvitesLambda, nodeMods);
});

gulp.task('zipIt_getInvites', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('getInvitesLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('getInvites', function(cb) {
    runSequence('build_getInvites', 'zipIt_getInvites', 'clean', cb);
});


gulp.task('build_acceptFriend', function() {
    var acceptFriendLambda = gulp.src('acceptFriendLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(acceptFriendLambda, nodeMods);
});

gulp.task('zipIt_acceptFriend', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('acceptFriendLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('acceptFriend', function(cb) {
    runSequence('build_acceptFriend', 'zipIt_acceptFriend', 'clean', cb);
});

gulp.task('build_rejectFriend', function() {
    var rejectFriendLambda = gulp.src('rejectFriendLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(rejectFriendLambda, nodeMods);
});

gulp.task('zipIt_rejectFriend', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('rejectFriendLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('rejectFriend', function(cb) {
    runSequence('build_rejectFriend', 'zipIt_rejectFriend', 'clean', cb);
});

gulp.task('build_processAccept', function() {
    var processAcceptLambda = gulp.src('processAcceptLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(processAcceptLambda, nodeMods);
});

gulp.task('zipIt_processAccept', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('processAcceptLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('processAccept', function(cb) {
    runSequence('build_processAccept', 'zipIt_processAccept', 'clean', cb);
});

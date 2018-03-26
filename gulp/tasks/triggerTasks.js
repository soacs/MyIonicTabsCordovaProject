var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_customMessage', function() {
    var customMessageLambda = gulp.src('customMessageLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(customMessageLambda, nodeMods);
});

gulp.task('zipIt_customMessage', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('customMessageLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('customMessage', function(cb) {
    runSequence('build_customMessage', 'zipIt_customMessage', 'clean', cb);
});

gulp.task('build_postAutenticate', function() {
    var postAutenticateLambda = gulp.src('postAutenticateLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(postAutenticateLambda, nodeMods);
});

gulp.task('zipIt_postAutenticate', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('postAutenticateLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('postAutenticate', function(cb) {
    runSequence('build_postAutenticate', 'zipIt_postAutenticate', 'clean', cb);
});


gulp.task('build_postUserConfirmation', function() {
    var postUserConfirmationLambda = gulp.src('postUserConfirmationLambda.js')
        .pipe(gulp.dest('build'));
    var awssdk = gulp.src('node_modules/aws-sdk/**')
        .pipe(gulp.dest('build/node_modules/aws-sdk'));
    var async = gulp.src('node_modules/async/**')
        .pipe(gulp.dest('build/node_modules/async'));
    return merge(postUserConfirmationLambda, awssdk, async);
});

gulp.task('zip_postUserConfirmation', function() {
    return gulp.src('build/**')
        .pipe(zip('postUserConfirmationLambda.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('store_postUserConfirmation', function() {
    return gulp.src('dist/*')
        .pipe(gulp.dest('lambda_zips'));
});

gulp.task('postUserConfirmation', function(cb) {
    runSequence('build_postUserConfirmation','zip_postUserConfirmation', 'store_postUserConfirmation','clean', cb);
});
gulp.task('build_postUserConfirmation', function() {
    var postUserConfirmationLambda = gulp.src('postUserConfirmationLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(postUserConfirmationLambda, nodeMods);
});

gulp.task('zipIt_postUserConfirmation', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('postUserConfirmationLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('postUserConfirmation', function(cb) {
    runSequence('build_postUserConfirmation', 'zipIt_postUserConfirmation', 'clean', cb);
});

gulp.task('build_preAuthenticate', function() {
    var preAuthenticateLambda = gulp.src('preAuthenticateLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(preAuthenticateLambda, nodeMods);
});

gulp.task('zipIt_preAuthenticate', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('preAuthenticateLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('preAuthenticate', function(cb) {
    runSequence('build_preAuthenticate', 'zipIt_preAuthenticate', 'clean', cb);
});

gulp.task('build_registration', function() {
    var registrationLambda = gulp.src('registrationLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(registrationLambda, nodeMods);
});

gulp.task('zipIt_registration', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('registrationLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('registration', function(cb) {
    runSequence('build_registration', 'zipIt_registration', 'clean', cb);
});

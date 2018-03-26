var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_endpointCreated', function() {
    var endpointCreatedLambda = gulp.src('endpointCreatedLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(endpointCreatedLambda, nodeMods);
});

gulp.task('build_endpointDeleted', function() {
    var endpointDeletedLambda = gulp.src('endpointDeletedLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(endpointDeletedLambda, nodeMods);
});

gulp.task('build_endpointFailure', function() {
    var endpointFailureLambda = gulp.src('endpointFailureLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(endpointFailureLambda, nodeMods);
});

gulp.task('build_endpointUpdated', function() {
    var endpointUpdatedLambda = gulp.src('endpointUpdatedLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(endpointUpdatedLambda, nodeMods);
});

gulp.task('build_endpointOperations', function() {
    var endpointOperationsLambda = gulp.src('endpointOperationsLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(endpointOperationsLambda, nodeMods);
});

gulp.task('build_snsEndpointUpdate', function() {
    var snsEndpointUpdateLambda = gulp.src('snsEndpointUpdateLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(snsEndpointUpdateLambda, nodeMods);
});

gulp.task('zipIt_endpointCreated', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('endpointCreatedLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('zipIt_endpointDeleted', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('endpointDeleteLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('zipIt_endpointUpdated', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('endpointUpdatedLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('zipIt_endpointFailure', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('endpointFailureLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('zipIt_endpointOperations', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('endpointOperationsLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('zipIt_snsEndpointUpdate', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('snsEndpointUpdateLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('endpointCreated', function(cb) {
    runSequence('build_endpointCreated', 'zipIt_endpointCreated', 'clean', cb);
});

gulp.task('endpointDeleted', function(cb) {
    runSequence('build_endpointDeleted', 'zipIt_endpointDeleted', 'clean', cb);
});

gulp.task('endpointUpdated', function(cb) {
    runSequence('build_endpointDeleted', 'zipIt_endpointUpdated', 'clean', cb);
});

gulp.task('endpointFailure', function(cb) {
    runSequence('build_endpointFailure', 'zipIt_endpointFailure', 'clean', cb);
});

gulp.task('endpointOperations', function(cb) {
    runSequence('build_endpointOperations', 'zipIt_endpointOperations', 'clean', cb);
});

gulp.task('snsEndpointUpdate', function(cb) {
    runSequence('build_snsEndpointUpdate', 'zipIt_snsEndpointUpdate', 'clean', cb);
});

gulp.task('allendpoints', function(cb) {
    runSequence('endpointCreated', 'endpointDeleted', 'endpointFailure', 'endpointUpdated', 'endpointOperations', 'snsEndpointUpdate', cb);
});
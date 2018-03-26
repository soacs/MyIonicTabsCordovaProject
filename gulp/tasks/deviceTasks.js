var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_addDevice', function() {
    var addDeviceLambda = gulp.src('addDeviceLambda.js').pipe(gulp.dest('build'));
    return merge(addDeviceLambda);
});

gulp.task('zipIt_addDevice', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('addDeviceLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('addDevice', function(cb) {
    runSequence('build_addDevice', 'zipIt_addDevice', 'updateAddDevice', 'clean', cb);
});

gulp.task('build_removeDevice', function() {
    var removeDeviceLambda = gulp.src('removeDeviceLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(removeDeviceLambda, nodeMods);
});

gulp.task('zipIt_removeDevice', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('removeDeviceLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('removeDevice', function(cb) {
    runSequence('build_removeDevice', 'zipIt_removeDevice', 'clean', cb);
});

gulp.task('build_getDevices', function() {
    var getDevicesLambda = gulp.src('getDevicesLambda.js').pipe(gulp.dest('build'));
    var nodeMods = gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
    return merge(getDevicesLambda, nodeMods);
});

gulp.task('zipIt_getDevices', function() {
    var zipIt = gulp.src('./build/**').pipe(zip('getDevicesLambda.zip')).pipe(gulp.dest('lambda_zips'));
    return zipIt;
});

gulp.task('getDevices', function(cb) {
    runSequence('build_getDevices', 'zipIt_getDevices', 'clean', cb);
});


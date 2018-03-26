var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('build_testNCONF', function() {
    var testNCONFLambda = gulp.src('testNCONFLambda.js')
        .pipe(gulp.dest('build'));
    var awssdk = gulp.src('node_modules/aws-sdk/**')
        .pipe(gulp.dest('build/node_modules/aws-sdk'));
    var nconf = gulp.src('node_modules/nconf/**')
        .pipe(gulp.dest('build/node_modules/nconf'));
    var json = gulp.src('config.json')
        .pipe(gulp.dest('build'));
    return merge(testNCONFLambda, awssdk, nconf, json);
});

gulp.task('zip_testNCONF', function() {
    return gulp.src('build/**')
        .pipe(zip('testNCONFLambda.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('store_testNCONF', function() {
    return gulp.src('dist/*')
        .pipe(gulp.dest('lambda_zips'));
});

gulp.task('testNCONF', function(cb) {
    runSequence('build_testNCONF','zip_testNCONF', 'store_testNCONF','clean', cb);
});

gulp.task('build_testSNS', function() {
    var testSNSLambda = gulp.src('testSNSLambda.js')
        .pipe(gulp.dest('build'));
    var awssdk = gulp.src('node_modules/aws-sdk/**')
        .pipe(gulp.dest('build/node_modules/aws-sdk'));
    var async = gulp.src('node_modules/async/**')
        .pipe(gulp.dest('build/node_modules/async'));
    return merge(testSNSLambda, awssdk, async);
});

gulp.task('zip_testSNS', function() {
    return gulp.src('build/**')
        .pipe(zip('testSNSLambda.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('store_testSNS', function() {
    return gulp.src('dist/*')
        .pipe(gulp.dest('lambda_zips'));
});

gulp.task('testSNS', function(cb) {
    runSequence('build_testSNS','zip_testSNS', 'store_testSNS','clean', cb);
});

gulp.task('build_testGetEndpoints', function() {
    var testGetEndpointsLambda = gulp.src('testGetEndpointsLambda.js')
        .pipe(gulp.dest('build'));
    var awssdk = gulp.src('node_modules/aws-sdk/**')
        .pipe(gulp.dest('build/node_modules/aws-sdk'));
    var async = gulp.src('node_modules/async/**')
        .pipe(gulp.dest('build/node_modules/async'));
    return merge(testGetEndpointsLambda, awssdk, async);
});

gulp.task('zip_testGetEndpoints', function() {
    return gulp.src('build/**')
        .pipe(zip('testGetEndpointsLambda.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('store_testGetEndpoints', function() {
    return gulp.src('dist/*')
        .pipe(gulp.dest('lambda_zips'));
});

gulp.task('testGetEndpoints', function(cb) {
    runSequence('build_testGetEndpoints','zip_testGetEndpoints', 'store_testGetEndpoints','clean', cb);
});

gulp.task('build_testGetItemDynamoDB', function() {
    var testGetItemDynamoDBLambda = gulp.src('testGetItemDynamoDBLambda.js')
        .pipe(gulp.dest('build'));
    var awssdk = gulp.src('node_modules/aws-sdk/**')
        .pipe(gulp.dest('build/node_modules/aws-sdk'));
    var async = gulp.src('node_modules/async/**')
        .pipe(gulp.dest('build/node_modules/async'));
    return merge(testGetItemDynamoDBLambda, awssdk, async);
});

gulp.task('zip_testGetItemDynamoDB', function() {
    return gulp.src('build/**')
        .pipe(zip('testGetItemDynamoDBLambda.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('store_testGetItemDynamoDB', function() {
    return gulp.src('dist/*')
        .pipe(gulp.dest('lambda_zips'));
});

gulp.task('testGetItemDynamoDB', function(cb) {
    runSequence('build_testGetItemDynamoDB','zip_testGetItemDynamoDB', 'store_testGetItemDynamoDB','clean', cb);
});

gulp.task('alltests', function(cb) {
    runSequence('testNCONF', 'testSNS', 'testGetItemDynamoDB', 'testGetEndpoints', cb);
});

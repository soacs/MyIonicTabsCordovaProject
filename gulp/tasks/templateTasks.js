
var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('createGetDevices', function (cb) {
    exec('aws lambda create-function --function-name getDevices --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\getDevicesLambda.zip --description getDevicesLambda --handler getDevicesLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateGetDevices', function (cb) {
    exec('aws lambda update-function-code --function-name getDevices --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\getDevicesLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteGetDevices', function (cb) {
    exec('aws lambda delete-function --function-name getDevices', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

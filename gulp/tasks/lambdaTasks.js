var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var argv = require('yargs');
var exec = require('child_process').exec;

gulp.task('createLambda', function (cb) {
        exec('aws lambda create-function --function-name ' + a + ' endpointFailure --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\' + a + 'Lambda.zip --description AWSLambdaFunction --handler ' + a+ 'Lambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateLambda', function (cb) {
    exec('aws lambda update-function-code --function-name ' + a + ' endpointFailure --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\' + a + 'Lambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteLambda', function (cb) {
    console.log("process.argv = " + process.argv);
    exec('aws lambda delete-function --function-name '+ a + '', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

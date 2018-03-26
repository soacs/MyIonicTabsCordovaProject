var gulp = require('gulp');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var merge = require('merge-stream');
var runSequence = require('gulp-run-sequence');
var gnf = require('gulp-npm-files');
var exec = require('child_process').exec;

gulp.task('createEndpointFailure', function (cb) {
        exec('aws lambda create-function --function-name endpointFailure --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip --description endpointFailureLambda --handler endpointFailureLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateEndpointFailure', function (cb) {
    exec('aws lambda update-function-code --function-name endpointFailure --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteEndpointFailure', function (cb) {
    exec('aws lambda delete-function --function-name endpointFailure', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createEndpointCreate', function (cb) {
    exec('aws lambda create-function --function-name endpointCreate --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointCreateLambda.zip --description endpointCreateLambda --handler endpointCreateLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateEndpointCreate', function (cb) {
    exec('aws lambda update-function-code --function-name endpointCreate --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointCreateLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteEndpointCreate', function (cb) {
    exec('aws lambda delete-function --function-name endpointCreate', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createEndpointDelete', function (cb) {
    exec('aws lambda create-function --function-name endpointDelete --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointDeleteLambda.zip --description endpointDeleteLambda --handler endpointDeleteLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateEndpointDelete', function (cb) {
    exec('aws lambda update-function-code --function-name endpointDelete --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointDeleteLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteEndpointDelete', function (cb) {
    exec('aws lambda delete-function --function-name endpointDelete', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createEndpointFailure', function (cb) {
    exec('aws lambda create-function --function-name endpointFailure --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip --description endpointFailureLambda --handler endpointFailureLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateEndpointFailure', function (cb) {
    exec('aws lambda update-function-code --function-name endpointFailure --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteEndpointFailure', function (cb) {
    exec('aws lambda delete-function --function-name endpointFailure', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createEndpointOperations', function (cb) {
    exec('aws lambda create-function --function-name endpointOperations --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointOperationsLambda.zip --description endpointOperationsLambda --handler endpointOperationsLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateEndpointOperations', function (cb) {
    exec('aws lambda update-function-code --function-name endpointOperations --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointOperationsLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteEndpointOperations', function (cb) {
    exec('aws lambda delete-function --function-name endpointOperations', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createSnsEndpointUpdate', function (cb) {
    exec('aws lambda create-function --function-name snsEndpointUpdate --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\snsEndpointUpdateLambda.zip --description snsEndpointUpdateLambda --handler snsEndpointUpdateLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateSnsEndpointUpdate', function (cb) {
    exec('aws lambda update-function-code --function-name snsEndpointUpdate --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\snsEndpointUpdateLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteSnsEndpointUpdate', function (cb) {
    exec('aws lambda delete-function --function-name snsEndpointUpdate', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createGetFriends', function (cb) {
    exec('aws lambda create-function --function-name getFriends --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip --description endpointFailureLambda --handler endpointFailureLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateGetFriends', function (cb) {
    exec('aws lambda update-function-code --function-name getFriends --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteGetFriends', function (cb) {
    exec('aws lambda delete-function --function-name getFriends', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createRemoveFriend', function (cb) {
    exec('aws lambda create-function --function-name removeFriend --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip --description endpointFailureLambda --handler endpointFailureLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateRemoveFriend', function (cb) {
    exec('aws lambda update-function-code --function-name removeFriend --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\endpointFailureLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteRemoveFriend', function (cb) {
    exec('aws lambda delete-function --function-name removeFriend', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('removeFunction', function() {
    var options = {
        continueOnError: false, // default = false, true means don't emit error event 
        pipeStdout: false, // default = false, true means stdout is written to file.contents 
        customTemplatingThing: "test" // content passed to gutil.template() 
    };
    var reportOptions = {
        err: true, // default = true, false means don't write err 
        stderr: true, // default = true, false means don't write stderr 
        stdout: true // default = true, false means don't write stdout 
    }
    gulp.src('.\lambda_zips')
        .pipe(exec('git checkout <%= file.path %> <%= options.customTemplatingThing %>', options))
        .pipe(exec.reporter(reportOptions));
});


gulp.task('createAwsCredentials', function (cb) {
    exec('aws lambda create-function --function-name awsCredentials --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\awsCredentialsLambda.zip --description awsCredentialsLambda --handler awsCredentialsLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateAwsCredentials', function (cb) {
    exec('aws lambda update-function-code --function-name awsCredentials --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\awsCredentialsLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteAwsCredentials', function (cb) {
    exec('aws lambda delete-function --function-name awsCredentials', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createSearchUsers', function (cb) {
    exec('aws lambda create-function --function-name searchUsers --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\searchUsersLambda.zip --description searchUsersLambda --handler searchUsersLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateSearchUsers', function (cb) {
    exec('aws lambda update-function-code --function-name searchUsers --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\searchUsersLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteSearchUsers', function (cb) {
    exec('aws lambda delete-function --function-name searchUsers', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createUserProfile', function (cb) {
    exec('aws lambda create-function --function-name userProfile --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\userProfileLambda.zip --description userProfileLambda --handler userProfileLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateUserProfile', function (cb) {
    exec('aws lambda update-function-code --function-name userProfile --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\userProfileLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteUserProfile', function (cb) {
    exec('aws lambda delete-function --function-name userProfile', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
gulp.task('createAddDevice', function (cb) {
    exec('aws lambda create-function --function-name addDevice --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\addDeviceLambda.zip --description addDeviceLambda --handler addDeviceLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateAddDevice', function (cb) {
    exec('aws lambda update-function-code --function-name addDevice --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\addDeviceLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteAddDevice', function (cb) {
    exec('aws lambda delete-function --function-name addDevice', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('createRemoveDevice', function (cb) {
    exec('aws lambda create-function --function-name removeDevice --runtime nodejs4.3 --role arn:aws:iam::190696475636:role/iluvsmarshaker_lambdaexecutionrole_MOBILEHUB_1341509029 --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\removeDeviceLambda.zip --description removeDeviceLambda --handler removeDeviceLambda.export', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('updateRemoveDevice', function (cb) {
    exec('aws lambda update-function-code --function-name removeDevice --zip-file fileb://C:\\Users\\steve\\WebstormProjects\\lambdaProj\\lambda_zips\\removeDeviceLambda.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('deleteRemoveDevice', function (cb) {
    exec('aws lambda delete-function --function-name removeDevice', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

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


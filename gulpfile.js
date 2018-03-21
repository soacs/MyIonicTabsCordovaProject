var gulp = require('gulp');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
var exec = require('child_process').exec;
var requireDir = require('require-dir');
requireDir( './gulp/tasks', { recurse: true } );

gulp.task('ping', function (cb) {
  exec('ping localhost', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_build_browser', function (cb) {
  exec('ionic build browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic run_browser', function (cb) {
  exec('ionic run browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_cordova_build_andriod', function (cb) {
  exec('ionic cordova build android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


gulp.task('ionic_cordova_build_andriod_release', function (cb) {
  exec('ionic cordova build android --release', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('distribute', function (cb) {
  exec('aws s3 cp platforms\\android\\app\\build\\outputs\\apk\\release\\app-release.apk s3://aws-website-angularorange-wcrwx/ ', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('deploy', function(cb) {
  runSequence('release', 'distribute', cb);
});

gulp.task('emulate', function(cb) {
  runSequence('build', 'emulate', cb);
});

gulp.task('ionic_cordova_requirements', function (cb) {
  exec('ionic cordova requirements', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_cordova_platform_add_ios', function (cb) {
  exec('ionic cordova platform add ios', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_cordova_platform_add_browser', function (cb) {
  exec('ionic cordova platform add browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_platform_rm_browser', function (cb) {
  exec('ionic platform rm browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_cordova_build_browser', function (cb) {
  exec('ionic cordova build browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_cordova_run_browser', function (cb) {
  exec('ionic cordova run browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


gulp.task('ionic_platform_rm_ios', function (cb) {
  exec('ionic platform rm ios', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


gulp.task('ionic_help', function (cb) {
  exec('ionic --help', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_serve', function (cb) {
  exec('ionic serve', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic:watch:before', ['watch'])


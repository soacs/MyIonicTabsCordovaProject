var gulp = require('gulp');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
var exec = require('child_process').exec;
var requireDir = require('require-dir');
var mail = require('gulp-mail');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var mailing = require('gulp-mailing');
requireDir('./gulp/tasks', {recurse: true});

// Help Commands

gulp.task('ionic_help', function (cb) {
  exec('ionic --help', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('cordova_help', function (cb) {
  exec('cordova --help', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Platform Informational Commands

gulp.task('ionic_cordova_platforms_ls', function (cb) {
  exec('ionic cordova platforms ls', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_requirements', function (cb) {
  exec('ionic cordova requirements', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

// Distribute Commands

gulp.task('distribute_android_release_to_aws', function (cb) {
  exec('aws s3 cp platforms\\android\\app\\build\\outputs\\apk\\release\\app-release.apk s3://aws-website-angularorange-wcrwx/ ', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('distribute_android_debug_to_aws', function (cb) {
  exec('aws s3 cp platforms\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk s3://aws-website-angularorange-wcrwx/ ', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

// All Platform Commands

// Platform Commands (Browser)

gulp.task('ionic_cordova_platform_add_browser', function (cb) {
  exec('ionic cordova platform add browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_platform_rm_browser', function (cb) {
  exec('ionic cordova platform rm browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_build_browser', function (cb) {
  exec('ionic cordova build browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_run_browser', function (cb) {
  exec('ionic cordova run browser', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Platform Commands (Android)

gulp.task('ionic_cordova_platform_add_androidd', function (cb) {
  exec('ionic cordova platform add android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_platform_rm_androidd', function (cb) {
  exec('ionic cordova platform rm android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_build_andriod', function (cb) {
  exec('ionic cordova build android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_build_andriod_release', function (cb) {
  exec('ionic cordova build android --release', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_emulate_android', function (cb) {
  exec('ionic cordova emulate android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('deploy_android', function (cb) {
  runSequence('ionic_cordova_build_andriod_release', 'distribute_android_release_to_aws', cb);
});

// Platform Commands (iOS)

gulp.task('ionic_cordova_platform_add_ios', function (cb) {
  exec('ionic cordova platform add ios', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic_cordova_platform_rm_ios', function (cb) {
  exec('ionic platform rm ios', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Run Commands

gulp.task('ionic_serve', function (cb) {
  exec('ionic serve', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('ionic:watch:before', ['watch']);

// Email Notifications using AWS Email Server

var smtpInfoAws = {
  auth: {
    user: "AKIAJCGHN4IHSWATXMCA",
    pass: "AjAiFzGqtjC9L4JwZ3Vr2REEfd20lsXuxvAKbTrAyB/p"
  },
  host: "email-smtp.us-east-1.amazonaws.com",
  secureConnection: false,
  port: 587
};

gulp.task('distribution_email_notification', function () {
  return gulp.src('./distribution/html/mobileDistributionEmailMessage.html')
    .pipe(mail({
      subject: 'Mobile App Version 2.0 Distribution',
      to: [
        'steve@soaconsultingservices.com'
      ],
      from: 'steve@soaconsultingservices.com',
      smtp: smtpInfoAws
    }));
});

// Email Notifications using Mochahost Email Server

var smtpInfoMochahost = {
  auth: {
    user: "dncnw0kt",
    pass: "timber91"
  },
  host: "mail.soaconsultingservices.com",
  secureConnection: false,
  port: 2525
};

gulp.task('distribution_email_attachment_notification', function () {
  return gulp.src('./distribution/html/mobileDistributionEmailAttachedMessage.html')
    .pipe(mailing({
      subject: 'Mobile App Version 2.0 Now Available ',
      to: [
        'steve@soaconsultingservices.com'
      ],
      from: 'steve@soaconsultingservices.com',
      attachments: [
        {
          path: 'platforms\\android\\app\\build\\outputs\\apk\\release\\app-release.apk'
        }
      ],
      smtp: smtpInfoAws
    }));
});

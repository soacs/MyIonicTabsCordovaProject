var gulp = require('gulp');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
var exec = require('child_process').exec;
var requireDir = require('require-dir');
var mail = require('gulp-mail');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
requireDir( './gulp/tasks', { recurse: true } );

gulp.task('ping', function (cb) {
  exec('ping localhost', function (err, stdout, stderr) {
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


gulp.task('distribute_from_toplevel', function (cb) {
  exec('aws s3 cp app-debug.apk s3://aws-website-angularorange-wcrwx/ ', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('deploy', function(cb) {
  runSequence('ionic_cordova_build_andriod_release', 'distribute', cb);
});

gulp.task('emulate', function(cb) {
  runSequence('ionic_cordova_build_andriod', 'ionic_cordova_emulate_android', cb);
});

gulp.task('ionic_cordova_build_android', function (cb) {
  exec('ionic cordova build android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ionic_cordova_emulate_android', function (cb) {
  exec('ionic cordova emulate android', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

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

gulp.task('ionic_cordova_platform_rm_browser', function (cb) {
  exec('ionic cordova platform rm browser', function (err, stdout, stderr) {
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

gulp.task('ionic_cordova_platform_rm_ios', function (cb) {
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

var smtpInfo = {
  auth: {
    user: "AKIAJCGHN4IHSWATXMCA",
    pass: "AjAiFzGqtjC9L4JwZ3Vr2REEfd20lsXuxvAKbTrAyB/p"
  },
  host : "email-smtp.us-east-1.amazonaws.com",
  secureConnection: false,
  port: 587
};

gulp.task('email_distribution', function () {
  return gulp.src('./test')
    .pipe(mail({
      subject: 'Mobile App',
      to: [
        'steve@soaconsultingservices.com'
      ],
      from: 'steve@soaconsultingservices.com',
      smtp: smtpInfo
    }));
});


FUTURE ON PREMISE FTP

/** Configuration **/
var user = process.env.FTP_USER;
var password = process.env.FTP_PWD;
var host = 'your hostname or ip address';
var port = 21;
var localFilesGlob = ['./**/*'];
var remoteFolder = '/myApp'

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
  return ftp.create({
    host: host,
    port: port,
    user: user,
    password: password,
    parallel: 5,
    log: gutil.log
  });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {

  var conn = getFtpConnection();

  return gulp.src(localFilesGlob, { base: '.', buffer: false })
    .pipe( conn.newer( remoteFolder ) ) // only upload newer files
    .pipe( conn.dest( remoteFolder ) )
    ;
});

/**
 * Watch deploy task.
 * Watches the local copy for changes and copies the new files to the server whenever an update is detected
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy-watch`
 */
gulp.task('ftp-deploy-watch', function() {

  var conn = getFtpConnection();

  gulp.watch(localFilesGlob)
    .on('change', function(event) {
      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files
        .pipe( conn.dest( remoteFolder ) )
        ;
    });
});

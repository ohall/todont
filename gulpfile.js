/**
 * Created by Oakley Hall on 2/11/15.
 */
var
  connect,
  gutil,
  gulp,
  lr,
  refresh,
  less,
  server,
  path,
  watch,
  http,
  minifyCSS,
  uglify,
  webserver,
  imagemin;

gulp = require('gulp');
gutil = require('gulp-util');
uglify = require('gulp-uglify');
less = require('gulp-less');
refresh = require('gulp-livereload');
connect = require('connect');
http = require('http');
path = require('path');
lr = require('tiny-lr');
watch = require('gulp-watch');
minifyCSS = require('gulp-minify-css');
imagemin = require('gulp-imagemin');
webserver = require('gulp-webserver');
server = lr();


gulp.task('default', function() {
  console.log( 'GULP!' );
});


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html'
    }));
});
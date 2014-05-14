var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minhtml = require('gulp-minify-html');
var cson = require('gulp-cson');
var mustache = require('gulp-mustache');
var clean = require('gulp-clean');

gulp.task('cson',
  function () {
    return gulp
      .src('./src/cson/*.cson')
      .pipe(concat('data.cson'))
      .pipe(cson())
      .pipe(gulp.dest('./src/'));
  });

gulp.task('html', ['cson'],
  function () {
    return gulp
      .src('src/html/*.html')
      .pipe(mustache('./src/data.json'))
      .pipe(minhtml())
      .pipe(gulp.dest('./'));
  });

gulp.task('less',
  function () {
    return gulp
      .src('./src/less/main.less')
      .pipe(less({compress: true}))
      .pipe(gulp.dest('./'))
  });

gulp.task('js',
  function () {
    return gulp
      .src('./src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./'));
  });

gulp.task('default', ['html', 'less', 'js'],
  function () {
    return gulp
      .src('src/data.json', {read: false})
      .pipe(clean());
  });

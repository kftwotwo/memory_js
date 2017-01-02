var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;

// concatScripts
gulp.task('concatScripts', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'))
});

// browserify *bundle
gulp.task('jsBrowserify', ['concatScripts'], function() {
  return browserify({entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
})

// minifyScripts (for production)
gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src(['./build/js/app.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
})
// clean
// build

// stream

// jshint

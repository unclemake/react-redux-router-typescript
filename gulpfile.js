const gulp = require('gulp');
const axiba = require('axiba');
const fs = require('fs');


gulp.task('default', function () {
    return axiba.watch()
});

gulp.task('main', function () {
    return axiba.init()
});


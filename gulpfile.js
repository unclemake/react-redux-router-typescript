const gulp = require('gulp');
const {compile, run} = require('axiba');
const fs = require('fs');


gulp.task('default', function () {
    compile.watch();
    return run();
});

gulp.task('main', function () {
    return compile.makeMainFile()
        .then(() => compile.bulid())
});


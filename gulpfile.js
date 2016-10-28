const gulp = require('gulp');
const axiba = require('axiba');

let task = axiba.compile;

gulp.task('default', function () {
    axiba.makeMainFile()
        .then(() => axiba.bulid()).then(() => {
            axiba.watch();
            server();

        })
});
const gulp = require('gulp');
const axiba = require('axiba');

let task = axiba.compile;

gulp.task('init', function () {
    task.makeMainFile();
});

// gulp.task('bulid', function () {
//     task.bulid();
// });

gulp.task('build', function () {
    task.watch();
    axiba.run();
});
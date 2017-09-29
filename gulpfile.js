const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['copyhtml', 'sass'])

gulp.task('message', function () {
    return console.log("Nananana");
});

gulp.task('copyhtml', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['copyhtml']);
    gulp.watch('src/sass/*.scss', ['sass']);
})

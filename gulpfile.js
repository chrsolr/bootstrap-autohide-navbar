const gulp = require('gulp');
const glp = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('build', () => {
    const minify_opts = {
        ext: {
            min: '.min.js'
        },
        ignoreFiles: ['-min.js', '.min.js'],
        mangle: true
    };

    return gulp.src('./src/bootstrap-autohide-navbar.js')
        .pipe(glp.minify(minify_opts))
        .pipe(gulp.dest(`./dist/`));
});

gulp.task('default', ['build']);
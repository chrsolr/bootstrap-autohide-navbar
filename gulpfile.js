const gulp = require('gulp');
const glp = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('build', () => {
    const pkg = require('./package.json');
    const banner = [
        '/**',
        ' * <%= pkg.name %>',
        ' * @desc <%= pkg.description %>',
        ' * @version <%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' * @author <%= pkg.author %>',
        ' */',
        ''
    ].join('\n');

    const minify_opts = {
        ext: {
            min: '.min.js'
        },
        ignoreFiles: ['-min.js', '.min.js'],
        mangle: true
    };

    return gulp.src('./src/**/*.ts')
        .pipe(glp.typescript({
            noImplicitAny: true
        }))
        .pipe(glp.header(banner, { pkg: pkg }))
        .pipe(glp.minify(minify_opts))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('sass/**/*.scss', 'library/**/*.scss') // Target both 'sass' and 'library' folders and subfolders
        .pipe(sass()) // Compile SCSS to CSS
        .pipe(purgecss({ content: ['*.html'] })) //  remove unused CSS from the generated styles.
        .pipe(dest('css')) // Output compiled CSS to the 'css' folder
}

function watchTask() {
    watch(['sass/**/*.scss', 'library/**/*.scss', '*.html'], buildStyles) // Watch all SCSS files in 'sass' folder
}

exports.default = series(buildStyles, watchTask)
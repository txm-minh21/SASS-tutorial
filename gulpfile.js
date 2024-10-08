const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('sass/**/*.scss') // Target all SCSS files in the 'sass' folder and subfolders
        .pipe(sass()) // Compile SCSS to CSS
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css')) // Output compiled CSS to the 'css' folder
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html'], buildStyles) // Watch all SCSS files in 'sass' folder
}

exports.default = series(buildStyles, watchTask)
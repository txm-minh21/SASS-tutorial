const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('sass/**/*.scss') // Target all SCSS files in the 'sass' folder and subfolders
        .pipe(sass()) // Compile SCSS to CSS
        .pipe(dest('css')) // Output compiled CSS to the 'css' folder
}

function watchTask() {
    watch(['sass/**/*.scss'], buildStyles) // Watch all SCSS files in 'sass' folder
}

exports.default = series(buildStyles, watchTask)
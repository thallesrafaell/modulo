const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imageMin = require('gulp-imagemin')

function compiladorSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function compirmejs(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeimg(){
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
}


exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} ,gulp.series(compiladorSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false} ,gulp.series(compirmejs))
    gulp.watch('./build/images', {ignoreInitial: false} ,gulp.series(comprimeimg))
}

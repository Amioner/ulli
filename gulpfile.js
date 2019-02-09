const gulp = require('gulp');

const less = require('gulp-less');

const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleancss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const babel = require("gulp-babel");

const config = {

  src: './',

  css: {

    less: 'src/less/**.less',
    vendor: 'src/less/vendor/**.less',
    css: 'src/css/**.css',
    dest: 'src/css',

  },
  html: {
    src: {
      src: 'src/index.html',
    }
  },
  dir: {
    src: 'src/',
  }
};

gulp.task('less', function(){

    gulp.src(config.src + config.css.less)

        .pipe(less())

        .pipe(gulp.dest(config.src + config.css.dest))

        .pipe(browserSync.reload({

            stream: true

        }));

});

gulp.task('watch', ['browserSync'], function(){

    gulp.watch(config.src + config.css.less, ['less']);
    gulp.watch(config.src + config.html.src.src, browserSync.reload(true));

});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});

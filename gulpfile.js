const { series } = require('gulp');
const { src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinyPNG = require('gulp-tinypng-compress');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function css(cb) {
    return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(dest('dist/css/'));
	cb();
}

function JavaScript(cb) {
    return src('./src/js/*.js')
		.pipe(dest('dist/js/'));
	cb();
}

function html(cb) {
    return src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist/'));
	cb();
}

function font(cb) {
    return src('./src/fonts/**/*')
		.pipe(dest('dist/fonts'));
	cb();
}

function tinypng(cb) {
    return src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'nSB4QMV255rzpMNFL6sjT6PKKRMHpfcm',
        }))
        .pipe(dest('dist/img/'));
	cb();
}

exports.tinypng = tinypng;
exports.font = font;
exports.default = series(css, JavaScript, html);
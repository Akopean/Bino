/**
 * Project path
 */
let srcDir = 'app',
    publicDir = 'dist';

export default {
    entries: {
        css: [`./${ srcDir }/css/style.scss`],
        js: [`./${ srcDir }/js/app.js`]
    },
    vendor: {
        js: [
        './bower_components/foundation/js/vendor/modernizr.js',
        './node_modules/jquery/dist/jquery.js',
        './bower_components/foundation/js/foundation.min.js',
        './bower_components/AniJS/dist/anijs.js',
		'./bower_components/AniJS/dist/helpers/dom/anijs-helper-dom.js',
        './node_modules/mixitup/dist/mixitup.min.js',
        ]
    },
    all: {
        html: `${ srcDir }/*.html`,
        template: `${ srcDir }/**/*.html`,
        js: `${ srcDir }/js/**/*.js`,
        css: `${ srcDir }/css/**/*.scss`,
        fonts: [`${ srcDir }/fonts/**/*.*`],
        images: `${ srcDir }/images/**/*.{gif,jpg,png,svg}`
    },
    dest: {
        js: `${ publicDir }/js`,
        css: `${ publicDir }/css`,
        html: `${ publicDir }/`,
        fonts: `${ publicDir }/fonts`,
        images: `${ publicDir }/images`
    },
    publicDir: publicDir
}

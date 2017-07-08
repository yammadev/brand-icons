// Require
const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');
const header = require('gulp-header');
const clean = require('gulp-clean');

/**
 * Autogenerate assets and minify.
 * $ gulp build
 */
gulp.task('build', function() {
  // Clean autogenerated assets
  gulp.src(['fonts', 'css', 'sass', '*.html'], {
    read: false
  })
    .pipe(clean());

  // Package
  var pkg = require('./package.json');

  // Banner
  var banner = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author.name %> - <%= pkg.author.url %>',
    ' * @version <%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ' '
  ].join('\n');

  // Fron svg
  gulp.src('svg/*.svg')

    // Generate
    .pipe(iconfont({
      fontName: pkg.name,
      formats: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
      timestamp: Math.round(Date.now() / 1000),
      normalize: true,
      fontHeight: 1001
    }))

    // Glyphs
    .on('glyphs', function(glyphs, options) {
      // Conf
      var config = {
        glyphs: glyphs.map(function(glyph) {
          return {
            name: glyph.name,
            codepoint: glyph.unicode[0].charCodeAt(0)
          }
        }),
        fontName: pkg.name,
        fontPath: '../fonts/',
        className: pkg.name
      };

      // Sass
      gulp.src('templates/' + pkg.name + '.scss')
        .pipe(consolidate('lodash', config))
        .pipe(gulp.dest('sass'))
        .on('end', function() {
          // Banner
          gulp.src('sass/*.scss')
            .pipe(header(banner, {
              pkg: pkg
            }))
            .pipe(gulp.dest('sass'));
        });

      // Css
      gulp.src('templates/' + pkg.name + '.css')
        .pipe(consolidate('lodash', config))
        .pipe(gulp.dest('css'))
        .on('end', function() {
          // Minify
          gulp.src('css/*.css')
            .pipe(minify())
            .pipe(rename({
              suffix: '.min'
            }))
            .pipe(gulp.dest('css'))
            .on('end', function() {
              // Banner
              gulp.src('css/*.css')
                .pipe(header(banner, {
                  pkg: pkg
                }))
                .pipe(gulp.dest('css'));
            });
        });

      // Html
      gulp.src('templates/' + pkg.name + '.html')
        .pipe(consolidate('lodash', config))
        .pipe(gulp.dest('./'));
    })

    // Fonts
    .pipe(gulp.dest('fonts'));
});

/**
 * Default.
 * $ gulp | gulp default
 */
gulp.task('default', ['build']);

# brand-icons
A svg + fonts + sass + css collection of brand logos by [Yefferson Marín](https://github.com/yammadev).

# Reference
Icons collection is available in [danleech/simple-icons](https://github.com/danleech/simple-icons), a free SVG icons for popular brands, maintained by Dan Leech.

# How to?
## Use it
1. Download the `fonts` folder and `css` file.
2. Use as usual.
```html
  <!-- Use lib -->
  <link href="css/brand-icons.css" rel="stylesheet">

  <!-- Just use 'brand-icons' + brand name (See reference) -->
  <i class="brand-icons-facebook"></i>
```

## Auto generate
1. In `svg` folder let just the files you need.
2. Run in console:
```bash
  # Install dependencies
  $ npm install

  # Build!
  $ gulp

  # Or use this instead
  $ gulp build
```

3. It will generate automatically:
```
  /css    <-- .css, .min.css
  /fonts  <-- .eot, .svg, .ttf, .woff, .woff2
  /sass   <-- .scss
```
4. Use as usual.

# Todo
- Maybe an index website (?)
- Pull `svg` files using `gulp-git` instead. I tried this but it seems to be really slow (don't know why) and after a while it never clone at all.

# Change log
## [1.2.3] - 2017-07-08
- Minor changes.

## [1.2.2] - 2017-07-08
- Minor changes.

## [1.2.1] - 2017-07-08
- Minor changes.

## [1.2.0] - 2017-07-08
- `html` template removed.

## [1.1.0] - 2017-07-08
- Minify `css` support.
- Added header to auto generated files.
- Versioning changed.
- Code cleaning.

## [1.0.0] - 2017-07-08
- `gulp` tasks added.
- `svg` icons added.
- `sass`, `css`, `fonts` and `html` auto compilation successful.
- `License` added.

## [0.0.1] - 2017-06-27
- Initial commit.
- `readme`.

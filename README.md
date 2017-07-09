# brand-icons
A `svg` + `fonts` + `sass` + `css` collection of brand logos by [Yefferson Marín](https://github.com/yammadev).

# Reference
Icons collection is available in [danleech/simple-icons](https://github.com/danleech/simple-icons), a free SVG icons for popular brands, maintained by Dan Leech.

# Looking for countries flags? ![CO](https://raw.githubusercontent.com/yammadev/flag-icons/master/png/CO.png)
Check out [yammadev/flag-icons](https://github.com/yammadev/flag-icons).

# How to?
## Use it
**1.** Download the `fonts` folder and `css` file.

**2.** Use as it follows:

```html
  <!-- Use generated lib -->
  <link href="css/brand-icons.css" rel="stylesheet">

  <!-- Or compressed -->
  <link href="css/brand-icons.min.css" rel="stylesheet">
```

**3.** Use `<i>` or `<span>` tags for example, and add the class `brand-icons` followed of the brand `name` (look **Reference** for details).

```html
  <!-- Just use brand-icons-brand name -->
    <!-- Using <i> -->
    <i class="brand-icons-facebook"></i>
    <!-- Using <span> -->
    <span class="brand-icons-facebook"></span>  
```

## Auto generate
**1.** In `svg` folder let just the files you need or desire.

**2.** Run in console:

```bash
  # Install dependencies
  $ npm install

  # Build!
  $ gulp

  # Or use this instead
  $ gulp build
```

**3.** It will generate automatically:

```
  /css    <-- .css, .min.css
  /fonts  <-- .eot, .ttf, .woff
  /sass   <-- .scss
```

**4.** Use as usual.

# Todo
- Maybe an index website (?).
- Pull `svg` files using `gulp-git` instead. I tried this but it seems to be really slow (don't know why) and after a while it never clone at all.

# Contribute
Pull requests are most than welcome.

# License
Released under the MIT license.

# Change log
## [1.1.6] - 2017-07-09
- Code cleaning.
- Readme edited.
- Versioning changed.

## [1.1.5] - 2017-07-08
- Readme edited.

## [1.1.4] - 2017-07-08
- Minor changes.

## [1.1.3] - 2017-07-08
- Minor changes.

## [1.1.2] - 2017-07-08
- Minor changes.

## [1.1.1] - 2017-07-08
- `html` template removed.

## [1.1.0] - 2017-07-08
- Minify `css` support.
- Added header to auto generated files.
- Versioning changed.
- Code cleaning.

## [1.0.0] - 2017-07-08
- `gulp` tasks added.
- `svg` icons added.
- `sass`, `css`, `fonts` and `html` auto compilation tasks.
- `License` added.

## [0.0.1] - 2017-06-27
- Initial commit.
- `readme`.

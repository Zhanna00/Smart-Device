import gulp from 'gulp';

const isDev = process.env.NODE_ENV === 'development';

const imageSources = ['source/img/**/*.{png,jpg,webp}'];
if (isDev) {
  imageSources.push('source/pixelperfect/**/*.{png,jpg,webp}');
}

const copySvg = () =>
  gulp.src('source/img/**/*.svg', { base: 'source' }).pipe(gulp.dest('build'));

const copyImages = () =>
  gulp
    .src(imageSources, { base: 'source' })
    .pipe(gulp.dest('build'));

const copy = () =>
  gulp
    .src(
      [
        'source/**.html',
        'source/fonts/**',
        'source/img/**',
        'source/favicon/**'
      ],
      {
        base: 'source'
      }
    )
    .pipe(gulp.dest('build'));

export { copy, copyImages, copySvg };

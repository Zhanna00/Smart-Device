import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import stackSprite from 'gulp-svg-sprite';
import webp from 'gulp-webp';

const svgo = () =>
  gulp
    .src('source/img/**/*.{svg}')
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [
            { removeViewBox: false },
            { removeRasterImages: true },
            { removeUselessStrokeAndFill: false }
          ]
        })
      ])
    )
    .pipe(gulp.dest('source/img'));

const sprite = () =>
  gulp
    .src('source/img/sprite/*.svg')
    .pipe(stackSprite({ mode: { stack: true } }))
    .pipe(rename('sprite_auto.svg'))
    .pipe(gulp.dest('build/img'));

/*
  Optional tasks
  ---------------------------------
  Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
  а не все изображения в img во всех папках.
  root = '' - по дефолту webp добавляются и обновляются во всех папках в source/img/
  root = 'content/' - webp добавляются и обновляются только в source/img/content/
*/

const createWebp = () => {
  const root = '';
  return gulp
    .src(`source/img/${root}**/*.{png,jpg}`)
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(`source/img/${root}`));
};

const optimizeImages = () =>
  gulp
    .src('build/img/**/*.{png,jpg}')
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ quality: 75, progressive: true })
      ])
    )
    .pipe(gulp.dest('build/img'));

export { svgo, sprite, createWebp, optimizeImages };

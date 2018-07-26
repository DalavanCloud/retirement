const gulp = require( 'gulp' );
const gulpChanged = require( 'gulp-changed' );
const configCopy = require( '../config' ).copy;
const handleErrors = require( '../utils/handle-errors' );

gulp.task( 'copy:files', function() {
  return gulp.src( configCopy.files.src )
    .pipe( gulpChanged( configCopy.files.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.files.dest ) );
} );

gulp.task( 'copy:icons', function() {
  return gulp.src( configCopy.icons.src )
    .pipe( gulpChanged( configCopy.icons.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.icons.dest ) );
} );

gulp.task( 'copy:vendorjs', function() {
  return gulp.src( configCopy.vendorjs.src )
    .pipe( gulpChanged( configCopy.vendorjs.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.vendorjs.dest ) );
} );

gulp.task( 'copy',
  gulp.parallel(
    'copy:files',
    'copy:icons',
    'copy:vendorjs'
  )
);

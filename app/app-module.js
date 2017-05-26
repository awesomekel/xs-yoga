(function () {
  'use strict';

  /* @ngdoc object
   * @name xsYoga
   * @description
   *
   */
  angular
    .module('xsYoga', [
      'ui.bootstrap',
      'bootstrapLightbox',
      'ui.router',
      'classes',
      'location',
      'bookings',
      'timetable',
      'promotions'
    ]);
}());

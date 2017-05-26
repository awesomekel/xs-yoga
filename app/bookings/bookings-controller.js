(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name booking.controller:bookingCtrl
   *
   * @description
   *
   */
  angular
    .module('bookings')
    .controller('BookingsCtrl', BookingsCtrl);

  function BookingsCtrl() {
    var vm = this;
    vm.ctrlName = 'BookingsCtrl';
  }
}());

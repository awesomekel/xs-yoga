(function () {
  'use strict';

  angular
    .module('bookings')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bookings', {
        url: '/bookings',
        templateUrl: 'bookings/bookings.tpl.html',
        controller: 'BookingsCtrl',
        controllerAs: 'bookings'
      });
  }
}());

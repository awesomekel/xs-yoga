(function () {
  'use strict';

  angular
    .module('xsYoga')
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: '/about.tpl.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('home', {
        url: '/',
        templateUrl: '/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('bookings', {
        url: '/',
        templateUrl: '/bookings.tpl.html',
        controller: 'BookingsCtrl',
        controllerAs: 'bookings'
      });
    $urlRouterProvider.otherwise('/');
  }
}());

(function () {
  'use strict';

  angular
    .module('promotions')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('promotions', {
        url: '/promotions',
        templateUrl: 'promotions/promotions.tpl.html',
        controller: 'PromotionsCtrl',
        controllerAs: 'promotions'
      });
  }
}());

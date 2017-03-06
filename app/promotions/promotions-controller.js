(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name promotions.controller:PromotionsCtrl
   *
   * @description
   *
   */
  angular
    .module('promotions')
    .controller('PromotionsCtrl', PromotionsCtrl);

  function PromotionsCtrl() {
    var vm = this;
    vm.ctrlName = 'PromotionsCtrl';
  }
}());

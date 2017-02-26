(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name location.controller:LocationCtrl
   *
   * @description
   *
   */
  angular
    .module('location')
    .controller('LocationCtrl', LocationCtrl);

  function LocationCtrl() {
    var vm = this;
    vm.ctrlName = 'LocationCtrl';
  }
}());

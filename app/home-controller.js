(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name xsYoga.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('xsYoga')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
  }
}());

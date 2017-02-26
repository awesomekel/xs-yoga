(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name classes.controller:ClassesPackagesCtrl
   *
   * @description
   *
   */
  angular
    .module('classes')
    .controller('ClassesPackagesCtrl', ClassesPackagesCtrl);

  function ClassesPackagesCtrl() {
    var vm = this;
    vm.ctrlName = 'ClassesPackagesCtrl';
    // Classes
    vm.unlimitedPackages = {};
    vm.classPackages = {};
  }
}());

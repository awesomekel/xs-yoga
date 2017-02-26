(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name classes.controller:ClassesCtrl
   *
   * @description
   *
   */
  angular
    .module('classes')
    .controller('ClassesCtrl', ClassesCtrl);

  function ClassesCtrl() {
    var vm = this;
    vm.ctrlName = 'ClassesCtrl';
  }
}());

(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name classes.controller:TrialCtrl
   *
   * @description
   *
   */
  angular
    .module('classes')
    .controller('TrialCtrl', TrialCtrl);

  function TrialCtrl() {
    var vm = this;
    vm.ctrlName = 'TrialCtrl';
  }
}());

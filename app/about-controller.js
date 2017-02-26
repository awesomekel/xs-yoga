(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name xsYoga.controller:AboutCtrl
   *
   * @description
   *
   */
  angular
    .module('xsYoga')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;
    vm.ctrlName = 'AboutCtrl';
  }
}());

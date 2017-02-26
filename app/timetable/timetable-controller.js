(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name timetable.controller:TimetableCtrl
   *
   * @description
   *
   */
  angular
    .module('timetable')
    .controller('TimetableCtrl', TimetableCtrl);

  function TimetableCtrl() {
    var vm = this;
    vm.ctrlName = 'TimetableCtrl';
  }
}());

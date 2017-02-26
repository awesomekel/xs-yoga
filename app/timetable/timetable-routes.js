(function () {
  'use strict';

  angular
    .module('timetable')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('timetable', {
        url: '/timetable',
        templateUrl: 'timetable/timetable.tpl.html',
        controller: 'TimetableCtrl',
        controllerAs: 'timetable'
      });
  }
}());

(function () {
  'use strict';

  angular
    .module('classes')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('classes', {
        url: '/classes',
        templateUrl: 'classes/classes.tpl.html',
        controller: 'ClassesCtrl',
        controllerAs: 'classes'
      })
      .state('classes/workshops', {
        url: '/classes/workshops',
        templateUrl: 'classes/classes-workshops.tpl.html',
        controller: 'ClassesWorkshopsCtrl',
        controllerAs: 'classesWorkshops'
      })
      .state('classes/packages', {
        url: '/classes/packages',
        templateUrl: 'classes/classes-packages.tpl.html',
        controller: 'ClassesPackagesCtrl',
        controllerAs: 'classesPackages'
      })
      .state('classes/trial', {
        url: '/classes/trial',
        templateUrl: 'classes/classes-trial.tpl.html',
        controller: 'TrialCtrl',
        controllerAs: 'trial'
      });
  }
}());

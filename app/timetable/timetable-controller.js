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
    vm.selected = 'monday';
    vm.select = function (day) {
      vm.selected = day;
      vm.selectedTimetable = vm.timetable[day];
    };

    vm.days = [
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
    ];
    vm.isSelected = function (day) {
      return vm.selected === day;
    };
    vm.timetable = {
      monday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner Mon',
          instructor: 'Sakina'
        }
      ],
      tuesday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner',
          instructor: 'Sakina'
        }
      ],
      wednesday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner',
          instructor: 'Sakina'
        }
      ],
      thursday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner',
          instructor: 'Sakina'
        }
      ],
      friday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner',
          instructor: 'Sakina'
        }
      ],
      saturday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner',
          instructor: 'Sakina'
        }
      ],
      sunday: [
        {
          time: '6:20 p.m. - 7:20p.m.',
          class: 'Aerial Yoga Beginner',
          instructor: 'Sakina'
        }
      ]
    };

    vm.select('monday');
  }
}());

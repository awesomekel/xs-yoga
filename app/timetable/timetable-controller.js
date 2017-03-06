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
          time: '09:00 - 11:00',
          class: 'Personal Training / 私教',
          instructor: 'Sakina'
        },
        {
          time: '16:30 - 18:00',
          class: 'Upcoming: XS Kids (Dance)',
          instructor: 'TBD'
        },
        {
          time: '18:30 - 19:30',
          class: 'Hips Opening / 软开度-开髋',
          instructor: 'Sakina'
        },
        {
          time: '19:45 - 20:45',
          class: 'Aerial Core Training (Beginner) / 空中瑜伽-核心建立',
          instructor: 'Sakina'
        }
      ],
      tuesday: [
        {
          time: '09:00 - 11:00',
          class: 'Personal Training / 私教',
          instructor: 'Sakina'
        },
        {
          time: '16:30 - 18:00',
          class: 'Upcoming: XS Kids (Dance)',
          instructor: 'TBD'
        },
        {
          time: '18:20 - 19:20',
          class: 'Inversions (Handstands) / 倒立',
          instructor: 'Yoyo'
        },
        {
          time: '19:30 - 20:30',
          class: 'Aerial Yoga Inversions / 空中瑜伽-低空倒立',
          instructor: 'Yoyo'
        }
      ],
      wednesday: [
        {
          time: '09:00 - 10:00',
          class: 'Personal Training / 私教',
          instructor: 'Sakina'
        },
        {
          time: '10:30 - 11:30',
          class: 'Pre/Postnatal Yoga / 孕妇瑜伽',
          instructor: 'Yoyo'
        },
        {
          time: '12:15 - 13:15',
          class: 'Noontime Yoga: Gentle Flow',
          instructor: 'Sakina'
        },
        {
          time: '18:30 - 19:30',
          class: 'Inversions (Handstands) / 倒立',
          instructor: 'Sakina'
        },
        {
          time: '19:45 - 20:45',
          class: 'Aerial Yoga Beginner / 初级空中瑜伽',
          instructor: 'Sakina'
        }
      ],
      thursday: [
        {
          time: '09:00 - 11:00',
          class: 'Personal Training / 私教',
          instructor: 'Sakina'
        },
        {
          time: '16:30 - 18:00',
          class: 'Upcoming: XS Kids (Dance)',
          instructor: 'TBD'
        },
        {
          time: '18:30 - 19:30',
          class: 'Chest-Opening Backbends / 后弯',
          instructor: 'Sakina'
        },
        {
          time: '19:45 - 20:45',
          class: 'Aerial Rotations（Beginner）/ 空中瑜伽-旋转初级',
          instructor: 'Sakina'
        }
      ],
      friday: [
        {
          time: '09:00 - 10:00',
          class: 'Personal Training / 私教',
          instructor: 'Sakina'
        },
        {
          time: '10:30 - 11:30',
          class: 'Pre/Postnatal Yoga / 孕妇瑜伽',
          instructor: 'Yoyo'
        },
        {
          time: '12:15 - 13:15',
          class: 'Noontime Yoga: Deep Stretch',
          instructor: 'Sakina'
        },
        {
          time: '16:30 - 18:00',
          class: 'Upcoming: XS Kids (Dance)',
          instructor: 'TBD'
        }
      ],
      saturday: [
        {
          time: '14:00 - 15:00',
          class: 'Beginner Inversions (Handstands) / 倒立',
          instructor: 'Yoyo'
        },
        {
          time: '15:15 - 16:15',
          class: 'Aerial Yoga Beginner / 初级空中瑜伽',
          instructor: 'Yoyo'
        }
      ],
      sunday: [
        {
          time: '08:30 - 10:00',
          class: 'Upcoming: XS Kids (Dance)',
          instructor: 'TBD'
        },
        {
          time: '14:00 - 15:00',
          class: 'Aerial Yoga Inversions / 空中瑜伽-低空倒立',
          instructor: 'Yoyo'
        }
      ]
    };

    vm.select('monday');
  }
}());

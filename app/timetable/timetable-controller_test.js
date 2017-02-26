/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TimetableCtrl', function () {
  var ctrl;

  beforeEach(module('timetable'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TimetableCtrl');
  }));

  it('should have ctrlName as TimetableCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TimetableCtrl');
  });
});

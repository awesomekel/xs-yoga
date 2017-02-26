/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ClassesWorkshopsCtrl', function () {
  var ctrl;

  beforeEach(module('classes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ClassesWorkshopsCtrl');
  }));

  it('should have ctrlName as ClassesWorkshopsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ClassesWorkshopsCtrl');
  });
});

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ClassesPackagesCtrl', function () {
  var ctrl;

  beforeEach(module('classes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ClassesPackagesCtrl');
  }));

  it('should have ctrlName as ClassesPackagesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ClassesPackagesCtrl');
  });
});

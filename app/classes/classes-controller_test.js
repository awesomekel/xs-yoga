/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ClassesCtrl', function () {
  var ctrl;

  beforeEach(module('classes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ClassesCtrl');
  }));

  it('should have ctrlName as ClassesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ClassesCtrl');
  });
});

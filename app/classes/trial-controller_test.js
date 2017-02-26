/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TrialCtrl', function () {
  var ctrl;

  beforeEach(module('classes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TrialCtrl');
  }));

  it('should have ctrlName as TrialCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TrialCtrl');
  });
});

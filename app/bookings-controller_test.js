/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BookingsCtrl', function () {
  var ctrl;

  beforeEach(module('xsYoga'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('BookingsCtrl');
  }));

  it('should have ctrlName as BookingsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('BookingsCtrl');
  });
});

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PromotionsCtrl', function () {
  var ctrl;

  beforeEach(module('promotions'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PromotionsCtrl');
  }));

  it('should have ctrlName as PromotionsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PromotionsCtrl');
  });
});

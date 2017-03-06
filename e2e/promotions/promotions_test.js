/* global describe, beforeEach, it, browser, expect */
'use strict';

var PromotionsPagePo = require('./promotions.po');

describe('Promotions page', function () {
  var promotionsPage;

  beforeEach(function () {
    promotionsPage = new PromotionsPagePo();
    browser.get('/#/promotions');
  });

  it('should say PromotionsCtrl', function () {
    expect(promotionsPage.heading.getText()).toEqual('promotions');
    expect(promotionsPage.text.getText()).toEqual('PromotionsCtrl');
  });
});

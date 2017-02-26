/* global describe, beforeEach, it, browser, expect */
'use strict';

var TrialPagePo = require('./trial.po');

describe('Trial page', function () {
  var trialPage;

  beforeEach(function () {
    trialPage = new TrialPagePo();
    browser.get('/#/classes/classes-trial');
  });

  it('should say TrialCtrl', function () {
    expect(trialPage.heading.getText()).toEqual('trial');
    expect(trialPage.text.getText()).toEqual('TrialCtrl');
  });
});

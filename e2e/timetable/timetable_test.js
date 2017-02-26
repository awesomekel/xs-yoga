/* global describe, beforeEach, it, browser, expect */
'use strict';

var TimetablePagePo = require('./timetable.po');

describe('Timetable page', function () {
  var timetablePage;

  beforeEach(function () {
    timetablePage = new TimetablePagePo();
    browser.get('/#/timetable');
  });

  it('should say TimetableCtrl', function () {
    expect(timetablePage.heading.getText()).toEqual('timetable');
    expect(timetablePage.text.getText()).toEqual('TimetableCtrl');
  });
});

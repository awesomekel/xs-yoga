/* global describe, beforeEach, it, browser, expect */
'use strict';

var ClassesWorkshopsPagePo = require('./classes-workshops.po');

describe('Classes/workshops page', function () {
  var classesWorkshopsPage;

  beforeEach(function () {
    classesWorkshopsPage = new ClassesWorkshopsPagePo();
    browser.get('/#/classes-workshops');
  });

  it('should say ClassesWorkshopsCtrl', function () {
    expect(classesWorkshopsPage.heading.getText()).toEqual('classesWorkshops');
    expect(classesWorkshopsPage.text.getText()).toEqual('ClassesWorkshopsCtrl');
  });
});

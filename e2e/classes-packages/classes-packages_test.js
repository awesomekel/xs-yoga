/* global describe, beforeEach, it, browser, expect */
'use strict';

var ClassesPackagesPagePo = require('./classes-packages.po');

describe('Classes/packages page', function () {
  var classesPackagesPage;

  beforeEach(function () {
    classesPackagesPage = new ClassesPackagesPagePo();
    browser.get('/#/classes-packages');
  });

  it('should say ClassesPackagesCtrl', function () {
    expect(classesPackagesPage.heading.getText()).toEqual('classesPackages');
    expect(classesPackagesPage.text.getText()).toEqual('ClassesPackagesCtrl');
  });
});

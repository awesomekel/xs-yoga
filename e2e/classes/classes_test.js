/* global describe, beforeEach, it, browser, expect */
'use strict';

var ClassesPagePo = require('./classes.po');

describe('Classes page', function () {
  var classesPage;

  beforeEach(function () {
    classesPage = new ClassesPagePo();
    browser.get('/#/classes');
  });

  it('should say ClassesCtrl', function () {
    expect(classesPage.heading.getText()).toEqual('classes');
    expect(classesPage.text.getText()).toEqual('ClassesCtrl');
  });
});

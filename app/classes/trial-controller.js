/* eslint-disable */
(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name classes.controller:TrialCtrl
   *
   * @description
   *
   */
  angular
    .module('classes')
    .controller('TrialCtrl', TrialCtrl);

  function TrialCtrl(Lightbox) {
    var vm = this;

    function createImageUrl(i, type) {
      return 'images/gallery-' + type + '/' + i + '.jpeg';
    }

    function createGallery(type) {
      var images = [],
          i;
      for (i = 1; i < 11; i++) {
        var obj = {
          url: createImageUrl(i, type),
          thumbUrl: createImageUrl(i, type)
        };
        images.push(obj);
      }
      return images;
    }

    vm.aerialImages = createGallery('aerial');
    vm.landImages = createGallery('land');

    vm.openLightboxModal = function (images, index) {
      Lightbox.openModal(images, index);
    };
  }
}());

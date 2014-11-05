angular.module('Instangular').directive('square', square);

function square() {
  return {
    restrict: "A",
    link: function(scope, element) {
      angular.element(window).on('resize', function() {
        element.height(element.width())
      });
      element.height(element.width())
    }
  }
};
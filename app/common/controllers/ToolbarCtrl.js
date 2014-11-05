angular.module('Instangular').controller('ToolbarCtrl', ToolbarCtrl);

function ToolbarCtrl($scope, $rootScope, $mdDialog) {

  $scope.compose = function(ev) {
    $mdDialog.show({
      templateUrl: 'assets/partials/compose-dialog.html',
      targetEvent: ev,
      controller: DialogController
    }).then(function() {
      $rootScope.$emit('newPost');
    }, function() {
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

}
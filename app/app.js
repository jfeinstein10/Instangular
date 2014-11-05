var app = angular.module('Instangular', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'assets/partials/home.html',
      controller: TimelineCtrl
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'assets/partials/profile.html',
      controller: ProfileCtrl
    });

});
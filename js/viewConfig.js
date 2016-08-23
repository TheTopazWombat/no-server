angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'https://thetopazwombat.github.io/no-server/views/home.html',
      })
      .state('archive', {
        url: '/archive',
        templateUrl: 'https://thetopazwombat.github.io/no-server/views/archive.html',
      });
  });

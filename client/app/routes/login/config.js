/* global angular */
(function () {
  angular.module('MyApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: '/app/routes/login/template.html',
          controller: 'LoginCtrl',
          controllerAs: 'ctrl'
        })
    })
})()

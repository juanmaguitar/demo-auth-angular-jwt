/* global angular */
(function () {
  angular.module('MyApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/register', {
          templateUrl: '/app/routes/register/template.html',
          controller: 'RegisterCtrl',
          controllerAs: 'login'
        })
    })
})()

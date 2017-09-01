/* global angular */
(function () {
  angular.module('MyApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/dashboard', {
          templateUrl: '/app/routes/dashboard/template.html',
          controller: 'DashboardCtrl',
          controllerAs: 'ctrl',
          secure: true
        })
    })
})()

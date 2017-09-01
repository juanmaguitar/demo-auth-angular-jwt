/* global angular */
(function () {
  angular.module('MyApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/stats', {
          templateUrl: '/app/routes/stats/template.html',
          controller: 'StatsCtrl',
          controllerAs: 'ctrl'
        })
    })
})()

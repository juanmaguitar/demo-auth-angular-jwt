/* global angular */
(function () {
  angular.module('MyApp', [
    'ngRoute',
    'toastr'
  ])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
})()

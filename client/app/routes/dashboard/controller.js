/* global angular */
(function () {
  angular.module('MyApp')
    .controller('DashboardCtrl', DashboardCtrl)

  function DashboardCtrl ($rootScope, ApiService, AuthService, $location) {

    if (!AuthService.isLoggedIn()) {
      $location.path('/login')
    }
    
    ApiService.getPrivateData()
      .then(data => { this.privateData = data })

    ApiService.getPublicData()
    .then(data => { this.publicData = data })
  }
})()

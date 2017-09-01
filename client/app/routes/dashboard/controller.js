/* global angular */
(function () {
  angular.module('MyApp')
    .controller('DashboardCtrl', DashboardCtrl)

  function DashboardCtrl (ApiService) {
    ApiService.getPrivateData()
      .then(data => { this.privateData = data })

    ApiService.getPublicData()
    .then(data => { this.publicData = data })
  }
})()

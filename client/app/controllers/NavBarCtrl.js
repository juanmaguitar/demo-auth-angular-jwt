/* global angular */
(function () {
  angular.module('MyApp')
    .controller('NavBarCtrl', NavBarCtrl)

  function NavBarCtrl (AuthService, $location, $scope) {
    $scope.logout = function () {
      AuthService.logout()
      $location.path('/login')
    }
  }
})()

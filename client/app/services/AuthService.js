/* global angular */
(function () {
  angular.module('MyApp')
    .factory('AuthService', AuthService)

  function AuthService ($http) {
    function register (username, password) {
      return $http.post('/register', {username, password})
    }

    return { register }
  }
})()

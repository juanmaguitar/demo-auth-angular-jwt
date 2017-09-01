/* global angular */
(function () {
  angular.module('MyApp')
    .factory('AuthService', AuthService)

  function AuthService ($http, StorageService) {
    function register (username, password) {
      return $http.post('/register', {username, password})
                .then(res => res.data)
    }

    function login (username, password) {
      return $http.post('/login', {username, password})
                .then(res => res.data)
                .then(data => {
                  StorageService.saveToken(data.token)
                  return data.success
                })
    }
    return { register, login }
  }
})()

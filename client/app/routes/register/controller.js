/* global angular */
(function () {
  angular.module('MyApp')
    .controller('RegisterCtrl', RegisterCtrl)

  function RegisterCtrl (AuthService) {
    this.register = (e) => {
      e.preventDefault()
      AuthService.register(this.username, this.password)
        .then(console.log)
    }
  }
})()

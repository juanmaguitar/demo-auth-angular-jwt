/* global angular */
(function () {
  angular.module('MyApp')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl (AuthService, toastr) {
    this.login = (e) => {
      e.preventDefault()
      AuthService.login(this.username, this.password)
        .then(success => {
          if (success) toastr.success('succesfully logged')
          else toastr.error('try again!')
        })
    }
  }
})()

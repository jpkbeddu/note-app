angular.module('myApp')
  .value('mvToastr', toastr);

angular.module('myApp')
  .factory('mvNotifier', ['mvToastr', function(mvToastr) {
    mvToastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": true,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "linear",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
    return {
      notify: function(msg) {
        if (msg === 'Logged in successfully' || msg === 'You have successfully signed out') {
          mvToastr.success(msg);
        } else {
          mvToastr.error(msg);
        }
      }
    }
  }]);

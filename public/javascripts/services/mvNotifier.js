angular.module('myApp')
  .value('mvToastr', toastr);

angular.module('myApp')
  .factory('mvNotifier', ['mvToastr', function(mvToastr) {
    return {
      notify: function(msg) {
        mvToastr.success(msg);
      }
    }
  }]);

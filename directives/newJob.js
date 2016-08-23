angular.module('app')
  .directive('newJob', [function() {
    return {
      templateUrl: 'https://thetopazwombat.github.io/no-server/directives/newJob.html',
      link: function(scope, element, attr){
        setTimeout(function() {
            $('.new-job').removeClass('animated');
        }, 1000);
      }
    };
  }]);

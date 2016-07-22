angular.module('app')
  .directive('jobsDirective', jobsDirective);

  function jobsDirective() {
    return {
      templateUrl:'/directives/job.html'

    };
  }

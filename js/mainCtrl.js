angular.module('app')
  .controller('mainCtrl', ['$scope', 'mainSrv', function($scope, mainSrv){
    $scope.customers = mainSrv.customerArr;
    console.log($scope.customers);
    $scope.addJob = function(jobNum, name, prod) {
      var job = {
        jobNumber: jobNum,
        lastName: name,
        product: prod,
      };
      $scope.customers.push(job);
      console.log(mainSrv.customerArr);
      mainSrv.saveCm();
      $scope.jobNum = '';
      $scope.name = '';
      $scope.prod = '';
    };
  }]);

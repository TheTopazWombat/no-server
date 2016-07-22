angular.module('app')
  .controller('mainCtrl', ['$scope', 'mainSrv', function($scope, mainSrv){
    $scope.customersArchive = mainSrv.customersArchive;
    $scope.saveJobData = function() {
      mainSrv.saveCm();
    };
    $scope.chckIn = false;
    $scope.rCharged = false;
    $scope.customers = mainSrv.customerArr;
    console.log($scope.customers);
    $scope.addJob = function(jobNum, name, prod, check, rCharged) {
      console.log($scope.chckIn);
      var job = {
        jobNumber: jobNum,
        lastName: name,
        product: prod,
        checkedIn: check,
        recharged: rCharged,
      };
      if (jobNum && name && prod) {
        $scope.customers.push(job);
        console.log(mainSrv.customerArr);
        mainSrv.saveCm();
        $scope.jobNum = '';
        $scope.name = '';
        $scope.prod = '';
      }
      else {
        alert('Fill out the form properly, dumbass');
      }
    };
    $scope.archiveJob = function(index) {
      var temp  = $scope.customers[index];
      $scope.customers.splice(index, 1);
      $scope.customersArchive.push(temp);
      console.log($scope.customersArchive);
      mainSrv.archiveCm();
      mainSrv.saveCm();
    };
  }]);

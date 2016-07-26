angular.module('app')
    .controller('mainCtrl', ['$scope', 'mainSrv', 'ngDialog', function($scope, mainSrv, ngDialog) {
        $scope.customersArchive = mainSrv.customersArchive;
        $scope.saveJobData = function() {
            mainSrv.saveCm();
        };
        $scope.clickToOpen = function() {
            ngDialog.open({
              template: './directives/newJob.html',
              // className: 'ngdialog-theme-default'
              controller: 'mainCtrl',
            });
        };

        $scope.chckIn = false;
        $scope.rCharged = false;
        $scope.cmApproval = false;
        $scope.finalTest = false;
        $scope.customers = mainSrv.customerArr;
        $scope.addJob = function(jobNum, name, prod, check, rCharged, time, tek, finTest, cmApp) {
            var job = {
                jobNumber: jobNum,
                lastName: name,
                product: prod,
                chckIn: check,
                rCharged: rCharged,
                time: time,
                counter: 0,
                tech: tek,
                finalTest: finTest,
                cmApproval: cmApp,
            };
            if (jobNum && name && prod && tek) {
                $scope.customers.push(job);
                mainSrv.saveCm();
                $scope.jobNum = '';
                $scope.name = '';
                $scope.prod = '';
                $scope.tech = '';
            } else {
                alert('Fill out the form properly, dumbass');
            }
            console.log(mainSrv.customerArr);
        };
        $scope.archiveJob = function(index, e) {
            console.log(index);
            $(e.target.parentElement).animate({
                opacity: '0'
            }, 500, function() {
                $(e.target.parentElement).animate({
                    width: 0,
                    'margin-left': 0,
                    border: 0
                }, 700, archiveIt.bind(null, index));
            });
        };

        function archiveIt(index) {
            var temp = $scope.customers[index];
            $scope.customers.splice(index, 1);
            $scope.customersArchive.push(temp);
            mainSrv.archiveCm();
            mainSrv.saveCm();
            setTimeout($scope.$apply.bind($scope), 500);

        }

        // $scope.toggle = function(){
        //   $scope.hidden=!$scope.hidden;
        // }
    }]);

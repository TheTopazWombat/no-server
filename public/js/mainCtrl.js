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

        $scope.checked_in = false;
        $scope.recharged = false;
        $scope.customer_approval = false;
        $scope.final_test = false;
        $scope.customers = mainSrv.customerArr;
        $scope.addJob = function(jobNum, name, prod, check, recharged, time, tek, finTest, cmApp) {
            var job = {
                job_number: jobNum,
                last_name: name,
                product: prod,
                checked_in: check,
                recharged: recharged,
                time: time,
                counter: 0,
                tech_assigned: tek,
                final_test: finTest,
                customer_approval: cmApp,
            };
            if (jobNum && name && prod && tek) {
                $scope.customers.push(job);
                mainSrv.saveCm();
                mainSrv.postNewJob(job);
                $scope.jobNum = '';
                $scope.name = '';
                $scope.prod = '';
                $scope.tech_assigned = '';
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
        $scope.getAllJobs = function() {
          mainSrv.getAllJobs().then(function(response) {
            console.log(response);
            $scope.dbJobs = response;
          });
        };
        $scope.getAllJobs();

    }]);

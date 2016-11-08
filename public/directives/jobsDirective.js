angular.module('app')
    .directive('jobsDirective', jobsDirective);

function jobsDirective() {
    return {
        templateUrl: './directives/job.html',
        link: function(scope, element, attr) {
            $(element).on('click', function() {
              console.log("Hi");
                $(this).addClass('currentJob');
                if (scope.cust.escalated) {
                    element[0].children[0].style.backgroundColor = '#d125ce';
                } else {
                  element[0].children[0].style.backgroundColor = '#335252';
                }

            });
            console.log(element);
            setTimeout(function() {
                $('.list-job').removeClass('animated');
            }, 1000);
            if (!scope.cust.time) {
                scope.cust.time = "00 : 00 : 00";
            }
            if (scope.cust.escalated) {
                element[0].children[0].style.backgroundColor = '#d125ce';
            }
            setTimeout(function() {
                $('.open-new-job').removeClass('animated');
            }, 1000);
            // $('.start-btn').on('click', function() {
            //     $('#time-spent').addClass('animated wobble infinite');
            //
            // });
            // $('.stop-btn').on('click', function() {
            //     $('#time-spent').removeClass('animated wobble infinite');
            // });
        }
    };
}

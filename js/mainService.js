angular.module('app')
  .service('mainSrv', [function() {
    this.customerArr = [];
    if (localStorage.getItem('customers')) {
      this.customerArr = JSON.parse(localStorage.getItem('customers'));
    }
    console.log(this.customerArr)
    this.saveCm = function() {
      localStorage.setItem('customers', JSON.stringify(this.customerArr));
    };
    // this.getCustomers = function() {
    //   return $http({
    //     method: 'GET',
    //     url: "js/customers.json",
    //   }).then(function(response) {
    //     customerArr = response.data.customers;
    //     return customerArr;
    //   });
    // };
  }]);

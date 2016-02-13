/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('routes',[]).config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/driver', {
            templateUrl: 'views/drivers.html',
            controller: 'DriverController'
        })
        .when('/customer', {
            templateUrl: 'views/customers.html',
            controller: 'CustomerController'
        });
        $locationProvider.html5Mode(true);
}]);

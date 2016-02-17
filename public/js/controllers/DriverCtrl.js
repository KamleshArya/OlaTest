/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('DriverCtrl', []).controller('DriverController', function($scope,$http) {
    $scope.tagline = 'Driver!';
    $scope.formData = {};
    $scope.waiting = {};
    $scope.ongoing={};
    $scope.completed ={};
    $http.get('/api/waiting')
        .success(function(data) {
            $scope.waiting = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $http.get('/api/ongoing')
        .success(function(data) {
            $scope.ongoing = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $http.get('/api/completed')
        .success(function(data) {
            $scope.completed = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.select = function(requestId) {
        console.log($scope.formData);
        $http.post('/api/select', $scope.formData)
            .success(function(data) {
                $location.path("/");
            })
            .error(function(data) {
            });
    };
});

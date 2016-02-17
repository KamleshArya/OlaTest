/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('DashboardCtrl', []).controller('DashboardController', function($scope,$http) {
    $scope.tagline = 'Dashboard!';
    $http.get('/api/requests')
        .success(function(data) {
            $scope.requests = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});

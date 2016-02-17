/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('CustomerCtrl', []).controller('CustomerController', function($scope, $http) {
    $scope.panelHeading = 'Book a ride';
    $scope.customerId = '';
    $scope.createRequest = function() {
        $http.post('/api/requests', $scope.customerId)
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
            });
    };
});

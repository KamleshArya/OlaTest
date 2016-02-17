/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('CustomerCtrl', []).controller('CustomerController', function($scope, $http,$location) {
    $scope.panelHeading = 'Book a ride';
    $scope.formData = {};
    $scope.createRequest = function() {
        $http.post('/api/requests', $scope.formData)
            .success(function(data) {
                $location.path("/");
            })
            .error(function(data) {
            });
    };
});

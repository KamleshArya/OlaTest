/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('CustomerCtrl', []).controller('CustomerController', function($scope) {
    $scope.panelHeading = 'Book a ride';
    $scope.createRequest = function(){
       /* var request_data = {
            requestId: this.customerId
            ,customerId: this.customerId
        };
        var request = new Request(request_data);
        request.save( function(error, data){
            if(error){
                res.json(error);
            }
            else{
                res.json(data);
            }
        });*/
        console.log('hello ' + this.customerId + $Request);
    }
});

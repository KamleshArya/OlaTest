/**
 * Created by Kamlesh on 14-Feb-16.
 */

angular.module('CustomerCtrl', []).controller('CustomerController', function($scope, Customer) {
    $scope.panelHeading = 'Book a ride';
    $scope.createRequest = function(){
        Customer.create(this.customerId);
    };
//    $scope.createRequest = function(){
//       var request = new Requests({
//            requestId: this.customerId
//            ,customerId: this.customerId
//        });
//        request.save( function(error, data){
//            console.log("hello");
//            if(error){
//                res.json(error);
//            }
//            else{
//                res.json(data);
//            }
//        });
//        //console.log('hello ' + this.customerId + $Request);
//    }
});

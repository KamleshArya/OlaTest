/**
 * Created by Kamlesh on 16-Feb-16.
 */

//var Request = require('./app/models/Requests');
angular.module('CustomerService',[]).factory('Customer', ['$http', function($http) {
    return {
        create : function(nerdData) {
            console.log(nerdData);
            //return $http.post('/api/nerds', nerdData);
        }
    }
}]);
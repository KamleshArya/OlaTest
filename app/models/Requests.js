/**
 * Created by Kamlesh on 14-Feb-16.
 */

var mongoose = require('mongoose');

var Request = mongoose.model('Request',new mongoose.Schema({
    customerId : String,
    timeElapsed:Date,
    status:String,
    driverId:String
}),'Request_data');

module.exports = Request;

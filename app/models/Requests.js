/**
 * Created by Kamlesh on 14-Feb-16.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Request',new mongoose.Schema({
    customerId : String,
    createdAt:Date,
    updatedAt:Date,
    status:String,
    driverId:String
}),'Request_data');

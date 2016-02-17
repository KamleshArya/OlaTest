/**
 * Created by Kamlesh on 14-Feb-16.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Driver',new mongoose.Schema({
    driverName : String
}),'Driver_data');
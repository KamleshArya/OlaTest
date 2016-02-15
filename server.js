/**
 * Created by Kamlesh on 14-Feb-16.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ola');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
    console.log("db Opened");
});
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);

var port = process.env.PORT || 3000;
console.log('listening on port 3000');
app.listen(port);
exports = module.exports = app;


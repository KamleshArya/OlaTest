/**
 * Created by Kamlesh on 14-Feb-16.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/ola');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
    console.log("db Opened");
});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
require('./app/routes')(app);

var port = process.env.PORT || 3000;
console.log('listening on port 3000');
app.listen(port);
exports = module.exports = app;


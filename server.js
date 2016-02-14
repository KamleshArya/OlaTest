/**
 * Created by Kamlesh on 14-Feb-16.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});
var port = process.env.PORT || 3000;
console.log('listening on port 3000');
app.listen(port);

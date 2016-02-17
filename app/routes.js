/**
 * Created by Kamlesh on 16-Feb-16.
 */

var Requests = require('./models/Requests');
module.exports = function(app) {
    app.get('/api/requests',function(req,res){
        Requests.find(function(err, requests) {
            if (err)
                res.send(err)
            res.json(requests);
        });
    });
    app.post('/api/requests', function(req, res) {
        Requests.create({
            customerId :req.body.customerId,
            createdAt : Date.now(),
            status :1
        }, function(err, todo) {
            if (err)
                res.send(err);
            Requests.find(function(err, requests) {
                if (err)
                    res.send(err)
                res.json(requests);
            });
        });
    });
    app.get('/api/waiting',function(req,res){
        Requests.find({status: "1"}, function(err, requests) {
            if (err)
                res.send(err)
            res.json(requests);
        });
    });
    app.get('/api/ongoing',function(req,res){
        Requests.find({status: "2"}, function(err, requests) {
            if (err)
                res.send(err)
            res.json(requests);
        });
    });
    app.get('/api/completed',function(req,res){
        Requests.find({status: "3"}, function(err, requests) {
            if (err)
                res.send(err)
            res.json(requests);
        });
    });
    app.post('/api/select', function(req, res) {
        console.log("fdg" +req.body.requestId);
    });
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
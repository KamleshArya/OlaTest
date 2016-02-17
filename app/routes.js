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
        console.log(req.customerId);
        /*Requests.create({
            customerId :req.customerId,
            timeElapsed : Date.now(),
            status :1
        }, function(err, todo) {
            if (err)
                res.send(err);
            Requests.find(function(err, requests) {
                if (err)
                    res.send(err)
                res.json(requests);
            });
        });*/
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
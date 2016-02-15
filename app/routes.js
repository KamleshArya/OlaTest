/**
 * Created by Kamlesh on 16-Feb-16.
 */

var Request = require('./models/Requests');
module.exports = function(app) {
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/vue_login', function(req, res, next) {
    var username = req.query.username;
    var password = req.query.password;
    request.get("http://127.0.0.1:80/myblog/welcome/vue_login?username=" + username + "&pwd=" + password, function (error, response, body) {
        req.session.loginUser = body;
        res.json(body);
    });
});

router.get('/vue_index', function (req, res, next) {
    // JSON.parse(req.session.loginUser).username;
    res.send(JSON.parse(req.session.loginUser));
    
});

module.exports = router;

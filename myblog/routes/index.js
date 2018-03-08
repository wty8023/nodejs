var express = require('express');
var user = require('../controllers/user');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/test', function (req, res, next) {
    res.render('test');
});

router.get('/index', function (req, res, next) {
    res.render('index');
});

router.get('/login', user.login);

router.get('/reg', user.reg);

router.post('/login', user.checkLogin);

router.get('/index_logined',user.logined)

router.get('/regist', user.regist);

module.exports = router;

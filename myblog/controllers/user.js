/**
 * Created by apple on 18/1/20.
 */
var userModel = require("../models/userModel");
var blogModel = require("../models/blogModel");


exports.regist = function (req,res) {
    res.render('regist');
};

exports.login =function(req,res){
    res.render('login');
};



exports.reg =function(req,res){
    var email = req.query.email;
    var name = req.query.name;
    var gender = req.query.gender;
    var pwd = req.query.pwd;
    var pwd2 = req.query.pwd2;
    var province = req.query.province;
    var city = req.query.city;
    var fn = function (results) {
        res.send(results);
    }
    userModel.regist(email, name, pwd, gender, province, city,fn)
    // res.render('regist')
};

exports.checkLogin = function (req, res) {
    var name = req.body.email;
    var pwd = req.body.pwd;
    userModel.getUserByNameAndPwd(name, pwd, function (results) {
        if (results.length > 0) {
            req.session.loginUser = results[0];
            res.redirect('/index_logined');
        } else {
            res.redirect('/login');
        }
    });
};
exports.logined = function (req, res) {
    blogModel.getBlogs(function (blogs) {
        if (blogs.length > 0) {
            blogModel.getTypes(function (types) {

                console.log(req.session.loginUser);
                res.render('index_logined', {
                    user: req.session.loginUser,
                    blogs: blogs,
                    types: types
                });
                // console.log(blogs);
                // console.log(types);               
            });
        } else {
            res.render('error');
        }
    })
};



// var svgCaptcha = require('svg-captcha');
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
// exports.getCode = (req, res) => {
//     var codeConfig = {
//         size: 5,// 验证码长度
//         ignoreChars: '0o1i', // 验证码字符中排除 0o1i
//         noise: 2, // 干扰线条的数量
//         height: 44
//     }
//     var captcha = svgCaptcha.create(codeConfig);
//     req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
//     var codeData = {
//         img: captcha.data
//     }
//     res.send(codeData);
// }
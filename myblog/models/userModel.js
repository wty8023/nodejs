var db = require('./db');
exports.regist = function (name, pwd, email, gender,province, city, callback) {
    var sql = `insert into t_user(username,password,email,sex,province,city) values('${name}','${pwd}','${email}','${gender}','${province}','${city}')`;
    db.query(sql, callback);
};
exports.getUserByNameAndPwd = function (name, pwd, callback) {
    // var sql = `select * from t_user where username='${name}' and password = '${pwd}')`;
    var sql = "select * from t_user where email='" + name + "' and password = '" + pwd + "'";
    db.query(sql, callback);
}

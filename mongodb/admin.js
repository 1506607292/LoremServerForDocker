var url = "mongodb://127.0.0.1/admin";
var db = connect(url);
db.createUser(
    {
      user: "admin", //用户名
      pwd: "password", //密码
      roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] //设置权限
    }
  )


  var url = "mongodb://127.0.0.1/LoremServer";
  var db = connect(url);
  db.createUser({ user:'user',pwd:'3325111',roles:[{role:'readWrite',db: 'LoremServer'}]});
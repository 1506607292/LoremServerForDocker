
var url = "mongodb://127.0.0.1/LoremServer";
var db = connect(url);

db.createUser({ user:'user',pwd:'3325111',roles:[{role:'readWrite',db: 'LoremServer'}]});
db.auth('user', '3325111');
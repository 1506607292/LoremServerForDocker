create database LoremServer;
create user 'user'@'%' identified by '3325111';
grant all privileges on LoremServer.* to 'user'@'%';
flush privileges;


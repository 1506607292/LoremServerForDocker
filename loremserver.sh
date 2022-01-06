docker network rm loremserver

docker network create --driver bridge --subnet 150.150.1.0/16 --gateway 150.150.1.0 loremserver

cd openresty
docker build -t loremsever-openresty:run .
docker stop loremserver-openresty
docker rm loremserver-openresty
docker run -d --name loremserver-openresty --net loremserver --ip 150.150.0.1 -p 80:80 loremsever-openresty:run
cd ..

# =====================================
cd mariadb

docker build -t loremsever-mariadb:run .
docker stop loremserver-mariadb
docker rm loremserver-mariadb
docker run --name loremserver-mariadb --net loremserver --ip 150.150.0.2 -e MYSQL_ROOT_PASSWORD=root_password -d loremsever-mariadb:run
docker exec loremserver-mariadb /bin/bash -c 'sh mariadb.sh'

cd ..
# ======================================
cd mongodb

docker build -t loremsever-mongodb:run .
docker stop loremserver-mongodb
docker rm loremserver-mongodb
docker run --name loremserver-mongodb --net loremserver --ip 150.150.0.3 -d loremsever-mongodb:run
docker exec loremserver-mongodb /bin/bash -c 'mongosh user.js'

cd ..
# ======================================
docker stop loremserver-redis
docker rm loremserver-redis
docker run --name loremserver-redis --net loremserver --ip 150.150.0.4 -d redis
# ======================================
cd python

docker build -t loremsever-python:run .
docker stop loremserver-python
docker rm loremserver-python
docker run --name loremserver-python --net loremserver --ip 150.150.0.5 -itd loremsever-python:run
docker exec loremserver-mariadb /bin/bash -c 'sh mariadb.sh'
docker exec loremserver-python /bin/bash -c 'sh python.sh'

cd ..
# ======================================




# openresty 150.150.0.1
# mariadb 150.150.0.2
# mongodb 150.150.0.3
# redis 150.150.0.4
# python3 150.150.0.5
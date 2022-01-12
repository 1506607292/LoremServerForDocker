class Mongo:
    def __init__(self, host='127.0.0.1', port=27017):
        from pymongo import MongoClient
        self.__host = host
        self.__port = port
        self.__client = MongoClient(self.__host, self.__port)
        # self.__client = MongoClient(self.__host, self.__port,username="user",password="3325111")
        self.__database = self.__client.LoremServer  # use test as default

    def getClient(self):
        return self.__client

    def getDB(self, username='user', password='3325111'):
        # self.__database.authenticate(username, password)
        # self.__client["LoremServer"].authenticate("user", "3325111")
        return self.__database

    def changeHost(self, host):
        from pymongo import MongoClient
        self.__host = host
        self.__client = MongoClient(self.__host, self.__port)

    def __del__(self):
        self.__client.close()


M = Mongo()
db = M.getDB()

db.QUESTION.insert_one({"dsa":"dsad"})
for i in db.QUESTION.find():
    print(i)
print("OK")




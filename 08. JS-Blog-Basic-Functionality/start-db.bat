@echo off
set MongoDBPath=C:\Program Files\MongoDB\Server\3.4\bin
set DatabasePath=C:\DB\JSblog
start cmd.exe /c cd %MongoDBPath% 
mongod --dbpath %DatabasePath%
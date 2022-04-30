"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let db_username = "rootuser";
let db_password = "rootpass";
let db_url = `mongodb://${db_username}:${db_password}@localhost:27017/`;
let database;
class MongoDB {
    check_database_connection(db_name) {
        mongodb_1.MongoClient.connect(db_url, function (err, db) {
            if (err)
                throw err;
            database = db.db(db_name);
            console.log("Database connection has been established!");
            db.close();
        });
    }
    create_collection(db_name, collection_name) {
        mongodb_1.MongoClient.connect(db_url, function (err, db) {
            if (err)
                throw err;
            database = db.db(db_name);
            database.createCollection(collection_name, function (err, res) {
                if (err)
                    throw err;
                console.log("Collection created!");
                console.log(res);
                db.close();
            });
        });
    }
    insert(db_name, collection_name, book) {
        mongodb_1.MongoClient.connect(db_url, function (err, db) {
            if (err)
                throw err;
            database = db.db(db_name);
            database.collection(collection_name).insertOne(book, function (err, res) {
                if (err)
                    throw err;
                console.log("1 document inserted successfully!");
                db.close();
            });
        });
    }
}
exports.default = MongoDB;

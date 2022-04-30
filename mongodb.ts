import { AnyError, MongoClient, MongoError } from "mongodb";
import Book from "./book";

let db_username:string = "rootuser";
let db_password:string = "rootpass";
let db_url:string = `mongodb://${db_username}:${db_password}@localhost:27017/`;
let database:any;

export default class MongoDB {
    check_database_connection(db_name:string) {
        MongoClient.connect(db_url, function (err: MongoError, db:MongoClient)  {
            if (err) throw err;
            database = db.db(db_name);
            console.log("Database connection has been established!");
            db.close();
        });
    }

    create_collection(db_name:string, collection_name:string) {
        MongoClient.connect(db_url, function (err: AnyError, db: MongoClient) {
            if (err) throw err;
            database = db.db(db_name);
            database.createCollection(collection_name, function (err: AnyError, res: any) {
                if (err) throw err;
                console.log("Collection created!");
                console.log(res);
                db.close();
            });
        });
    }

    insert(db_name:string, collection_name:string, book:Book) {
        MongoClient.connect(db_url, function (err: AnyError, db: MongoClient) {
            if (err) throw err;
            database = db.db(db_name);
            database.collection(collection_name).insertOne(book, function (err: AnyError, res: any) {
                if (err) throw err;
                console.log("1 document inserted successfully!");
                db.close();
            });
        });
    }
}

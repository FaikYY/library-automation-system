let Book = require("../Model/BookModel");
const mongoose = require("mongoose");

let db_username = "rootuser";
let db_password = "rootpass";
let db_url = `mongodb://${db_username}:${db_password}@localhost:27017/library?authSource=admin`;

mongoose.connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true });
console.log("MongoDB connection has been established!!");

exports.get_all = async function (){
    try{
        let books = await Book.find({});
        return books;
    }
    catch(error){
        console.log(error.message);
    }
}
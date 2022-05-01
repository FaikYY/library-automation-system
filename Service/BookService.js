let Book = require("../Model/BookModel");
const mongoose = require("mongoose");

let db_username = "rootuser";
let db_password = "rootpass";
let db_url = `mongodb://${db_username}:${db_password}@localhost:27017/library?authSource=admin`;

mongoose.connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true });
console.log("MongoDB connection has been established!!");

get_all = async function (){
    try{
        let books = await Book.find({});
        return books;
    }
    catch(error){
        console.log(error.message);
    }
}

create = async function(){
    try{
        const book = await Book.create({
            title: "World 141",
            total_pages: 345,
            rating: 3,
            isbn: 84756,
            publish_date: "2019"
        });
        console.log(book);
    }
    catch(error){
        console.log(error.message);
    }
}


module.exports = {get_all, create};
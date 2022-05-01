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

create = async function(title, total_pages, rating, isbn, publish_date){
    try{
        const book = await Book.create({
            title: title,
            total_pages: total_pages,
            rating: rating,
            isbn: isbn,
            publish_date: publish_date
        });
        //book.save();
        console.log(book);
    }
    catch(error){
        console.log(error.message);
    }
}


module.exports = {get_all, create};

// localhost:3000/api/create?title=FaikBaba&total_pages=123&rating=1&isbn=91024&publish_date=2005

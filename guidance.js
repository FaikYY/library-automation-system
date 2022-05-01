const mongoose = require("mongoose");
const BookModel = require("./Model/BookModel");

let db_username = "rootuser";
let db_password = "rootpass";
let db_url = `mongodb://${db_username}:${db_password}@localhost:27017/library?authSource=admin`;

mongoose.connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true });

async function create() {
    try {
        const book = await BookModel.create({
            title: "Fahreinheit 451",
            total_pages: 220,
            rating: 5,
            isbn: 9874,
            publish_date: "2016",
        });
        console.log(book);
    } catch (error) {
        console.log(error.message);
    }
}

create();

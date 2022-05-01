const mongoose = require("mongoose");
const BookModel = require("./Model/BookModel");

let db_username = "rootuser";
let db_password = "rootpass";
let db_url = `mongodb://${db_username}:${db_password}@localhost:27017/library?authSource=admin`;

mongoose.connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true });

async function create() {
    try {
        const book = await BookModel.create({
            title: "Power of Habits",
            total_pages: 150,
            rating: 4,
            isbn: 12354,
            publish_date: "2012",
        });
        console.log(book);
    } catch (error) {
        console.log(error.message);
    }
}

create();

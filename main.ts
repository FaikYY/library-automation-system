import Book from "./book";
import MongoDB from "./mongodb";

const mongodb = new MongoDB();
let book = new Book("Atomic Habits", 250, 5, 87564, "2015");

function main() {
    mongodb.check_database_connection("library");
    mongodb.insert("library", "book", book);
}

main();

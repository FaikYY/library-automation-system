"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, total_pages, rating, isbn, publish_date) {
        this.title = title;
        this.total_pages = total_pages;
        this.rating = rating;
        this.isbn = isbn;
        this.publish_date = publish_date;
    }
}
exports.default = Book;

export default class Book{
    title: string;
    total_pages: number;
    rating: number;
    isbn: number;
    publish_date: string;

    constructor(title: string, total_pages: number, rating: number, isbn: number, publish_date: string){
        this.title = title;
        this.total_pages = total_pages;
        this.rating = rating;
        this.isbn = isbn;
        this.publish_date = publish_date;
    }
}
let BookService = require("../Service/BookService");

get_all = async function (req, res, next) {
    try {
        const books = await BookService.get_all();
        return res
            .status(200)
            .json({
                status: 200,
                data: books,
                message: "Succesfully Books Retrieved!",
            });
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
};

create = async function (req, res, next) {
    try {
        const title = req.query.title;
        const total_pages = req.query.total_pages;
        const publish_date = req.query.publish_date;
        const rating = req.query.rating;
        const isbn = req.query.isbn;
    
        const book_created = await BookService.create(title, total_pages, rating, isbn, publish_date);
        return res
            .status(200)
            .json({
                status: 200,
                data: book_created,
                message: "A Book Created Succesfully!",
            });
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
};

delete_by_id = async function (req, res, next) {
    try {
        const book_deleted = await BookService.delete_by_id(req.params.id);
        return res
            .status(200)
            .json({
                status: 200,
                data: book_deleted,
                message: "A Book Deleted Succesfully!",
            });
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
};

update = async function (req, res, next) {
    try {
        const id = req.query.id;
        const new_book = {
            title: req.query.title,
            total_pages: req.query.total_pages,
            rating: req.query.rating,
            isbn: req.query.isbn,
            publish_date: req.query.publish_date
        };
        const books = await BookService.update(id, new_book);
        return res
            .status(200)
            .json({
                status: 200,
                data: books,
                message: "Succesfully Books Retrieved!",
            });
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
};


module.exports = {get_all, create, delete_by_id, update};

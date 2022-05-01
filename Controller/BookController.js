let BookService = require("../Service/BookService");

get_all = async function (req, res, next) {
    try {
        let books = await BookService.get_all();
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
    
        let books = await BookService.create(title, total_pages, rating, isbn, publish_date);
        return res
            .status(200)
            .json({
                status: 200,
                data: books,
                message: "A Book Created Succesfully!",
            });
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
};


module.exports = {get_all, create};

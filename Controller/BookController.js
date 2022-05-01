let BookService = require("../Service/BookService");

exports.get_all = async function (req, res, next) {
    try {
        let books = await BookService.get_all({});
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

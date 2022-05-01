var express = require('express');
var router = express.Router();

var BookController = require('../Controller/BookController');

router.get('/getAll', BookController.get_all);
router.get('/create', BookController.create);

// TODO: fix this part, try to replace "get" with "delete"
router.get('/delete', BookController.delete_by_isbn);



module.exports = router;

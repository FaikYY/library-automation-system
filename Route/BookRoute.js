var express = require('express');
var router = express.Router();

var BookController = require('../Controller/BookController');

router.get('/getAll', BookController.get_all);

module.exports = router;
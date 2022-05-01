var express = require('express');
var router = express.Router();

var BookController = require('../Controller/BookController');

router.get('/getAll', BookController.get_all);
router.post('/create', BookController.create);
router.delete('/delete/:id', BookController.delete_by_id);
router.put('/update', BookController.update);


module.exports = router;

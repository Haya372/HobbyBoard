var express = require('express');
var router = express.Router();
const crud_hobby = require('../crud/hobby');

router.get('/:id', function(req, res, next){
    let id = req.params.id;
    crud_hobby.read_hobby(id, res);
});

module.exports = router;
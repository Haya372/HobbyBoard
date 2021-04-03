var express = require('express');
var router = express.Router();
const crud_user = require('../crud/user')

router.get('/:uname', function(req, res, next){
    var uname = req.params.uname;
    crud_user.read_user(uname, res);
});

router.put('/:id', function(req, res, next){
    var id = req.params.id;
    crud_user.update_user(id, req.body, res);
});

module.exports = router;
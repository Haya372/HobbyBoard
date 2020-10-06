var express = require('express');
var router = express.Router();
const crud_hobby = require('../crud/hobby');
const crud_good_hobby = require('../crud/hobby');
const crud_bad_hobby = require('../crud/hobby');

router.get('/:id', function(req, res, next){
    let id = req.params.id;
    crud_hobby.read_hobby(id, res);
});

//いいねの更新
router.put('/good/:id',(req, res) => {
    //idに紐付いたhobbyデータを取る
    let id = req.params.id;
    crud_good_hobby.good_hobby(id, res);
});

router.put('/bad/:id',(req, res) => {
    //idに紐付いたhobbyデータを取る
    let id = req.params.id;
    crud_bad_hobby.bad_hobby(id, res);
});

module.exports = router;
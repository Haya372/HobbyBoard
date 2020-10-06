var express = require('express');
var router = express.Router();
const crud_GatherParticipant = require('../crud/gatherparticipant');
const crud_gather = require('../crud/gather');

router.post('/:id', function(req, res, next){
    let gather_id = req.params.id;
    crud_GatherParticipant.participate_gather(gather_id, 3, res);
});

router.get('/lists', function(req, res, next){
    crud_gather.read_gather(res);
});

module.exports = router;
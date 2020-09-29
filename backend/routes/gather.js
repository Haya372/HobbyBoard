var express = require('express');
var router = express.Router();
const crud_GatherParticipant = require('../crud/gatherparticipant');

router.post('/:id', function(req, res, next){
    let gather_id = req.params.id;
    crud_GatherParticipant.participate_gather(gather_id, 3, res);
});

module.exports = router;
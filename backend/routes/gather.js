var express = require('express');
var router = express.Router();
const crud_GatherParticipant = require('../crud/gatherparticipant');
const crud_gather = require('../crud/gather');
const search = require("../search/gather");
const models = require("../models");

router.get("/search/:keyword", async  function(req, res, next){
    // Get keyword from request parameter. 
    let keyword = req.params.keyword;
    // Find gather ID including keyword with lunr. 
    idx = await search.lunr_promise();
    result_ids = await idx.search(keyword)

    // Find gather detail by ID just found.
    const results = await Promise.all(
        result_ids.map(async function(result_id){
        id = result_id.ref
        result = await models.Gather.findOne({
            where : {id : id}
        });

        console.log(result.dataValues)
        return result.dataValues
        
    }));

    res.send(results)

});

router.post('/add/comments', async function(req, res, next){
    await models.GatherComment.create({
        gather_id : Number(req.body.gather_id),
        user_id : Number(req.body.user_id),
        comment : req.body.comment,
        good : 0,
        bad : 0,
        secret : req.body.secret
    });
    res.send(200)
});

router.put('/update/comments/:id', async function(req, res, next){

    await models.GatherComment.update({
        comment : req.body.comment,
        secret : req.body.secret
    }, 
        {
            where : {
                id : Number(req.params.id)
            }
        });

    res.send(200);
});


router.get('/delete/comments/:gather_id', async function(req, res, next){

    await models.GatherComment.destroy({
        where : {
            id : Number(req.params.gather_id)
        }
        });

    res.send(200)
});





router.post('/:id', function(req, res, next){
    let gather_id = req.params.id;
    crud_GatherParticipant.participate_gather(gather_id, 3, res);
});

router.get('/lists', function(req, res, next){
    crud_gather.read_gather(res);
});

module.exports = router;

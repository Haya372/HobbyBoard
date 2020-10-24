var express = require('express');
var router = express.Router();
const crud_hobby = require('../crud/hobby');
const search = require("../search/hobby");
const models = require("../models");

router.get("/search/:keyword", async  function(req, res, next){
    // Get keyword from request parameter. 
    let keyword = req.params.keyword;
    // Find hobby ID including keyword with lunr. 
    idx = await search.lunr_promise();
    console.log(idx);
    result_ids = await idx.search(keyword)

    // Find hobby detail by ID just found.
    const results = await Promise.all(
        result_ids.map(async function(result_id){
        id = result_id.ref
        result = await models.Hobby.findOne({
            where : {id : id}
        });

        console.log(result.dataValues)
        return result.dataValues
        
    }));

    res.send(results)

});

router.post('/add/comments', async function(req, res, next){
    hs = await models.HobbyComment.findAll()
    hs.forEach(function(h){
        console.log(h.dataValues)
    });
    await models.HobbyComment.create({
        hobby_id : Number(req.body.hobby_id),
        user_id : Number(req.body.user_id),
        comment : req.body.comment,
        good : 0,
        bad : 0,
        secret : req.body.secret
    });
    hs = await models.HobbyComment.findAll()
    hs.forEach(function(h){
        console.log(h.dataValues)
    });
    res.send(200)
});

router.put('/update/comments/:id', async function(req, res, next){
    hs = await models.HobbyComment.findAll()
    hs.forEach(function(h){
        console.log(h.dataValues)
    });

    await models.HobbyComment.update({
        comment : req.body.comment,
        secret : req.body.secret
    }, 
        {
            where : {
                id : Number(req.params.id)
            }
        });
    hs = await models.HobbyComment.findAll()
    hs.forEach(function(h){
        console.log(h.dataValues)
    });

    res.send(200);
});


router.get('/delete/comments/:id', async function(req, res, next){
    hs = await models.HobbyComment.findAll()
    hs.forEach(function(h){
        console.log(h.dataValues)
    });

    await models.HobbyComment.destroy({
        where : {
            id : Number(req.params.id)
        }
        });
    hs = await models.HobbyComment.findAll()
    hs.forEach(function(h){
        console.log(h.dataValues)
    });

    res.send(200)
});




router.get('/:id', function(req, res, next){
    let id = req.params.id;
    crud_hobby.read_hobby(id, res);
});

module.exports = router;

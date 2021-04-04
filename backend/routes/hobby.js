var express = require('express');
var router = express.Router();
const crud_hobby = require('../crud/hobby');
const search = require("../search/hobby");
const models = require("../models");

router.get('/lists', function(req, res, next){
    crud_hobby.read_hobby_list(res);
});

router.get('/lists/:user_id', function(req, res, next){
    var user_id = req.params.user_id;
    crud_hobby.read_hobby_list_by_user(user_id, res);
});

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

router.post('/add/comments', function(req, res, next){
    models.HobbyComment.create({
        hobby_id : Number(req.body.hobby_id),
        user_id : Number(req.body.user_id),
        comment : req.body.comment,
        good : 0,
        bad : 0,
        secret : req.body.secret
    }).then(function(){
        crud_hobby.read_hobby(Number(req.body.hobby_id), res);
    }).catch(function(){
        res.sendStatus(500);
    });
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

router.put('/good/:id', async function(req, res, next){
        const q_id = req.query.id
        var cnt = 0
        hg = await models.Hobby.findAll({
            where : {
                id : Number(req.params.id)
            }
        }
        )
        
        hg.forEach(function(h){
            if (h.hobby_id == q_id){
                cnt = h.good + 1
            }
        });
        
        await models.Hobby.update({
            good : cnt,
        }, 
            {
                where : {
                    id : Number(req.params.id)
                }
            });
        hg_t = await models.Hobby.findAll({
            where : {
                id : Number(req.params.id)
            }
        })
    
        res.status(200).send(hg_t);
    });
    
    router.put('/bad/:id', async function(req, res, next){
        const q_id = req.query.id
        var cnt = 0
        hb = await models.Hobby.findAll({
            where : {
                id : Number(req.params.id)
            }
        }
        )
        console.log("hb",hb)
        hb.forEach(function(h){
            if (h.hobby_id == q_id){
                cnt = h.bad + 1
            }
        });
        
        await models.Hobby.update({
            bad : cnt,
        }, 
            {
                where : {
                    id : Number(req.params.id)
                }
            });
        hb_t = await models.Hobby.findAll({
            where : {
                id : Number(req.params.id)
            }
        })
    
        res.status(200).send(hb_t);
    })
    
    router.put('/comment/good/:id', async function(req, res, next){
        const q_id = req.query.id
        var cnt = 0
        hcg = await models.HobbyComment.findAll({
            where : {
                id: Number(req.params.id)
            }
        }
        )

        hcg.forEach(function(h){
            if (h.hobby_id == q_id){
                cnt = h.good + 1
            }
        });
        
        await models.HobbyComment.update({
            good : cnt,
        }, 
            {
                where : {
                    id: Number(req.params.id)
                }
            });
        hcg_t = await models.HobbyComment.findAll({
            where : {
                id: Number(req.params.id)
            }
        })
    
        res.status(200).send(hcg_t);
    })
    
    router.put('/comment/bad/:id', async function(req, res, next){
        const q_id = req.query.id
        var cnt = 0
        hcb = await models.HobbyComment.findAll({
            where : {
                id : Number(req.params.id)
            }
        }
        )

        hcb.forEach(function(h){
            if (h.hobby_id == q_id){
                cnt = h.good + 1
            }
        });
        
        await models.HobbyComment.update({
            good : cnt,
        }, 
            {
                where : {
                    id : Number(req.params.id)
                }
            });
        hcb_t = await models.HobbyComment.findAll({
            where : {
                id : Number(req.params.id)
            }
        })
    
        res.status(200).send(hcb_t);
    })

    router.get('/content/delete/:hobby_id', async function(req, res, next){
        //依存関係の解消のためにコメントを削除
        hc = await models.HobbyComment.destroy({
            where : {
                id : Number(req.params.hobby_id)
            }
            });

        await models.Hobby.destroy({
            where : {
                id: Number(req.params.hobby_id)
            }
            });
        console.log("delete_hobby")
        res.send(200)
    });

module.exports = router;

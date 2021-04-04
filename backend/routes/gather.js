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

router.get('/lists/:user_id', function(req, res, next){
    let user_id = req.params.user_id;
    console.log(user_id)
    crud_gather.read_gather(user_id, res);
});

router.put('/good/:id', async function(req, res, next){
    var good_cnt = 0
    hg = await models.Gather.findOne({
        where : {
            id : Number(req.params.id)
        }
    }
    )

    console.log("test",hg.dataValues)

    good_cnt = hg.dataValues.good + 1

    await models.Gather.update({
        good : good_cnt,
    }, 
        {
            where : {
                id : Number(req.params.id)
            }
        });
    hg_t = await models.Gather.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    res.status(200).send(hg_t);
});

router.put('/bad/:id', async function(req, res, next){
    var bad_cnt = 0
    hb = await models.Gather.findOne({
        where : {
            id : Number(req.params.id)
        }
    }
    )

    console.log("test",hb.dataValues)

    bad_cnt = hb.dataValues.bad + 1

    await models.Gather.update({
        bad : bad_cnt,
    }, 
        {
            where : {
                id : Number(req.params.id)
            }
        });
    hb_t = await models.Gather.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    res.status(200).send(hb_t);
})

router.get('/content/delete/:gather_id', async function(req, res, next){
    //依存関係の解消のためにコメントを削除
    gc = await models.GatherComment.destroy({
        where : {
            id : Number(req.params.hobby_id)
        }
        });

    await models.Gather.destroy({
        where : {
            id: Number(req.params.hobby_id)
        }
        });
    console.log("delete_gather")
    res.send(200)
});

// router.put('/comment/good/:id', async function(req, res, next){
//     const q_id = req.query.id
//     var cnt = 0
//     hcg = await models.GatherComment.findAll({
//         where : {
//             id : Number(req.params.id)
//         }
//     }
//     )

//     hcg.forEach(function(h){
//         if (h.hobby_id == q_id){
//             cnt = h.good + 1
//         }
//     });
    
//     await models.GatherComment.update({
//         good : cnt,
//     }, 
//         {
//             where : {
//                 id : Number(req.params.id)
//             }
//         });
//     hcg_t = await models.GatherComment.findAll({
//         where : {
//             id : Number(req.params.id)
//         }
//     })

//     res.status(200).send(hcg_t);
// })

// router.put('/comment/bad/:id', async function(req, res, next){
//     const q_id = req.query.id
//     var cnt = 0
//     hcb = await models.GatherComment.findAll({
//         where : {
//             id : Number(req.params.id)
//         }
//     }
//     )

//     hcb.forEach(function(h){
//         if (h.hobby_id == q_id){
//             cnt = h.good + 1
//         }
//     });
    
//     await models.GatherComment.update({
//         good : cnt,
//     }, 
//         {
//             where : {
//                 id : Number(req.params.id)
//             }
//         });
//     hcb_t = await models.GatherComment.findAll({
//         where : {
//             id : Number(req.params.id)
//         }
//     })

//     res.status(200).send(hcb_t);
// })


module.exports = router;

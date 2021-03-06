const models = require('../models');

const participate_gather = async function(gather_id, user_id, res){
    const t = await models.sequelize.transaction();
    try{
        await models.GatherParticipant.create({
            gather_id: gather_id,
            user_id: user_id
        }, { transaction: t });
        let members = await models.sequelize.query(
            `select user_id, username, sex, age
            from GatherParticipants
            inner join Users
            on Users.id = GatherParticipants.user_id
            where gather_id=` + gather_id
        , { transaction: t });
        await t.commit();
        res.status(200).send(members[0]);
    }catch(err){
        await t.rollback();
        res.sendStatus(500);
    } 
}

module.exports = {
    participate_gather
}
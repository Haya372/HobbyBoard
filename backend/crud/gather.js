const models = require('../models');
const { Op } = require('sequelize');

const delete_timeout_gather = async function(){
    let one_hour_ago = new Date();
    one_hour_ago.setHours(one_hour_ago.getHours() - 1);
    const t = await models.sequelize.transaction();
    try{
        let delete_items = await models.Gather.findAll({
            where: {
                createdAt: {
                    [Op.lt]: one_hour_ago,
                }
            },
            attributes: ['id'],
        });
        delete_items.forEach(async function(item){
            await models.GatherParticipant.destroy({
                where: {
                    gather_id: item.dataValues.id,
                }
            }, { transaction: t });
            await models.GatherComment.destroy({
                where: {
                    gather_id: item.dataValues.id
                },
                transaction: t
            }, { transaction: t });
        });
        await models.Gather.destroy({
            where: {
                createdAt: {
                    [Op.lt]: one_hour_ago,
                }
            }
        }, { transaction: t });
        await t.commit();
    }catch(err){
        console.log(err);
        await t.rollback();
    }
} 

module.exports = {
    delete_timeout_gather,
}
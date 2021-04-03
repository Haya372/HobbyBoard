const models = require('../models');

const read_user = async function(uname, res){
    let userdata = await models.User.findOne({ where: { username: uname } });
    if(userdata){
        res.status(200).send(userdata);
    }else{
        res.status(404).send("ユーザーが見つかりません");
    }
}

const update_user = function(id, data, res){
    models.User.update(data, { where : { id: id } }).then(function(){
        res.sendStatus(200);
    }).catch(function(err){
        res.sendStatus(500);
    });
}

module.exports = {
    read_user,
    update_user
}
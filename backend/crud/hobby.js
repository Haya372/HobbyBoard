const models = require('../models');

const read_hobby = async function(hobby_id, res){
    let hobby = await models.sequelize.query(
        `select Hobbies.id as id, user_id, username, title, content, good, bad, secret
        from Hobbies
        inner join Users
        on Users.id=user_id
        where Hobbies.id=` + hobby_id
    );
    let comment = await models.sequelize.query(
        `select HobbyComments.id as id, hobby_id, user_id, username, comment, good, bad, secret
        from HobbyComments
        inner join Users
        on Users.id=HobbyComments.user_id
        where hobby_id=` +hobby_id
    );
    res.status(200).send({
        hobby: hobby[0][0],
        comments: comment[0]
    });
}

const read_hobby_list = async function(res){
    let hobbies = await models.Hobby.findAll();
    let items = [];
    hobbies.forEach((hobby) => {
        items.push(hobby.dataValues);
    });
    res.status(200).send(items);
}

const read_hobby_list_by_user = async function(user_id, res){
    let hobbies = await models.Hobby.findAll({ where: { user_id: user_id } });
    console.log(hobbies)
    let items = [];
    hobbies.forEach((hobby) => {
        items.push(hobby.dataValues);
    });
    res.status(200).send(items);
}

module.exports = {
    read_hobby,
    read_hobby_list,
    read_hobby_list_by_user
}
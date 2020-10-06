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
     console.log("hobby[0][0].good:",hobby[0][0].good)
};



const good_hobby = async function(hobby_id, res){
    let hobby = await models.sequelize.query(
        `select Hobbies.id as id, user_id, username, title, content, good, bad, secret
        from Hobbies
        inner join Users
        on Users.id=user_id
        where Hobbies.id=` + hobby_id
    );
    
    // //いいね
    hobby[0][0].good += 1;
    res.status(200).send({
        hobby: hobby[0][0],
    });
}

const bad_hobby = async function(hobby_id, res){
    let hobby = await models.sequelize.query(
        `select Hobbies.id as id, user_id, username, title, content, good, bad, secret
        from Hobbies
        inner join Users
        on Users.id=user_id
        where Hobbies.id=` + hobby_id
    );
    
    //よくないね
    hobby[0][0].bad += 1;
    res.status(200).send({
        hobby: hobby[0][0],
    });
}


module.exports = {
    read_hobby,
    good_hobby,
    bad_hobby
}

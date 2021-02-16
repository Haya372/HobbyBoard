const { Op } = require("sequelize");
const { response } = require("express");
const models = require("../models");


const read_user = async function(res){
    let users = await models.User.findAll();
    let items = [];
    users.forEach((user) => {
        items.push(user.dataValues);
    });
    res.status(200).send(items);
}

module.exports = {
    read_user,
}
var express = require('express');
var router = express.Router();
const models = require("../models");
// const crud_login = require('../login/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req, res, next) {
  console.log("frontside",req.body.username)
  // let users = await models.User.findAll();
  let users = await models.User.findOne({
    where : {
      username: req.body.username,
      password: req.body.password,
    }
  })
  if(!users) {
    res.sendStatus(500)
  }
  res.status(200).send(users)
});

module.exports = router;

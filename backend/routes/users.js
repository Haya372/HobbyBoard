var express = require('express');
var router = express.Router();
const models = require("../models");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//login
// router.post('/login', async function(req, res, next){
//   usr = await models.User.findOne({
//     where: {
//       username: req.body.username,
//       password: req.body.password
//     }
//   });

//   if(usr != null){
    
//   }

// });

//login
router.post('/login', (req, res, next) => {
  models.User.findOne({
    where:{
      username:req.body.username,
      password:req.body.password,
    }
  }).then(usr=>{
    if (usr != null) {
      req.session.login = usr;
      let back = req.session.back;
      if (back == null){
        back = '/';
      }
      res.redirect(back);
    } else {
      var data = {
        title:'Users/Login',
        content:'名前かパスワードに問題があります。再度入力下さい。'
      }
      res.render('users/login', data);
    }
  })
});


module.exports = router;

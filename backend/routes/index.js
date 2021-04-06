var express = require('express');
var router = express.Router();
var session = require('express-session');
const models = require("../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


router.get('/login', async function(req, res, next) {
  console.log('test')
  console.log("session_send",req.session)
  if(!req.session.passport.user){
    res.send(500)
  }else{
    let users = await models.User.findOne({
      where : {
        username: req.session.passport.user.username,
        password: req.session.passport.user.password
      }
    });
    res.status(200).send(users);
  }
});

passport.use(new LocalStrategy(
  async(username, password, done) => {

    let users = await models.User.findOne({
      where : {
        username: username,
        password: password
      }
    });
    console.log("users",users)
    
    if(!users){
      // Error
      console.log("error")
      return done(null, false);
    } else {
      // Success and return user information.
      console.log("success")
      return done(null, {username: username, password: password});
    }
  }
));

passport.serializeUser((user, done) => {
  console.log('Serialize ...',user);

  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('Deserialize ...');
  done(null, user);
});

router.use(passport.initialize());
router.use(passport.session());

router.post('/',
  passport.authenticate('local',
    {
      failureRedirect : '/login',
      successRedirect : '/'
    }
  )
);

router.put('/logout', (req, res) => {
  req.session.passport.user = undefined;
  res.send(200)
});

module.exports = router;

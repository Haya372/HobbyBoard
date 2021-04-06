var express = require('express');
var router = express.Router();
var session = require('express-session');
const models = require("../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


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
      console.log(users.dataValues)
      return done(null, {uid: users.dataValues.id, username: username, password: password});
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

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.sendstatus(401).send(info)
    }
    req.login(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.sendstatus(200).json(user)
    })
  })(req, res, next)
})

router.put('/logout', (req, res) => {
  req.session.passport.user = undefined;
  res.send(200)
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//dummy
/*
router.post('/api/add/comments/hobby',(req,res,next)=>{
  res.send([{
      id: '1',
      username: 'res1',
      comment: 'hoge',
      secret: false,
      good: 2,
      bad: 5
  },{
      id: '2',
      username: 'res2',
      comment: 'hoge',
      secret: true,
      good: 2,
      bad: 5
  },{
      id: '3',
      username: 'res3',
      comment: 'hoge',
      secret: true,
      good: 2,
      bad: 5
  }]);
});

router.put('/api/good/:id',(req,res,next)=>{
  res.sendStatus(200);
});

router.put('/api/bad/:id',(req,res,next)=>{
  res.sendStatus(200);
});

router.post('/api/submit/hobby',(req,res,next)=>{
  res.sendStatus(200);
});
*/


module.exports = router;

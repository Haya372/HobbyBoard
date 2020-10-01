var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//dummy
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

router.get('/api/hobby/:id', (req,res,next)=>{
  res.send({
    hobby:{
      id: 1,
      title: 'title',
      username: 'user1',
      content: 'test',
      good: 1,
      bad: 0
  },
  comments:[{
    id: '1',
    username: '1',
    comment: 'hoge',
    secret: false,
    good: 2,
    bad: 5
},{
    id: '2',
    username: '2',
    comment: 'hoge',
    secret: true,
    good: 2,
    bad: 5
},{
    id: '3',
    username: '3',
    comment: 'hoge',
    secret: false,
    good: 2,
    bad: 5
}]
  })
})

module.exports = router;

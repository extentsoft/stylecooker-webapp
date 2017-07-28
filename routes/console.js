var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('console',{title: 'Console'});
});

router.get('/console', function(req,res){
  res.render('console',{title: 'Console'});
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('inventory',{title: 'Inventory'});
});

router.get('/add', function(req,res){
  res.render('new_item',{title: 'New Item'});
});

router.get('/edit', function(req,res){
  res.render('edit_item',{title: 'Edit Item'});
});



router.get('/query', function(req,res){
  res.render('query', {title: 'Item Search Result'});
});


module.exports = router;

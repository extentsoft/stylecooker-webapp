var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req,res){


  var options = {
    host: 'http://localhost',
    port: 3000,
    path: '/api/item',
    method: 'GET'
  };

  request.get('http://localhost:3000/api/item', function (error, response, body) {
    if (error) {
      throw error;
    }
    const data = JSON.parse(body);
    console.log(data);
    console.log(data.items.length);
    res.render('inventory',{
      'title': 'Inventory',
      'items': data.items
    });
  });
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

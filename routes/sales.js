var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('catalog',{title: 'Sales Process - Catalog'});
});

router.get('/catalog', function(req,res){
  res.render('catalog',{title: 'Sales Process - Catalog'});
});

router.get('/reservation', function(req,res){
  res.render('reservation',{title: 'Sales Process - Reservation'});
});

router.get('/shipping', function(req,res){
  res.render('shipping',{title: 'Sales Process - Shipping'});
});

router.get('/history', function(req,res){
  res.render('history',{title: 'Sales Process - History'});
});


module.exports = router;

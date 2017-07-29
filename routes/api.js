var express = require('express');
var router = express.Router();

/* [GET /api/item] - Get all items */
router.get('/item', function(req,res){
  res.send('[GET /api/item]');
});

/* [GET /api/item/id] - Get specific items */
router.get('/item/:id', function(req,res){
  res.send('[GET /api/item/id]');
});

/* [POST /api/item] - Create a new item */
router.post('/item', function(req,res){
  res.send('[POST /api/item]');
});

/* [PUT /api/item/id] - Update specific item */
router.put('/item/:id', function(req,res){
  res.send('[PUT /api/item/id]');
});

/* [DELETE /api/item/id] - Delete specific item */
router.delete('/item/:id', function(req,res){
  res.send('[DELETE /api/item/id]');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var loki = require('lokijs'),
  db = new loki('stylecooker.json');

var items = db.addCollection('items');
var orders = db.addCollection('orders');
router.get('/test/item', function(req,res){

  res.send('Done mocking');
});
router.get('/test/order', function(req,res){

});

/*  **************************
    ****** API for Item ******
*/
/* [GET /api/item] - Get all items */
router.get('/item', function(req,res){
  res.send(items.data);
});

/* [GET /api/item/id] - Get specific items */
router.get('/item/:id', function(req,res){
  res.send(items.find({sku : req.params.id}));
});

/* [POST /api/item] - Create a new item */
router.post('/item', function(req,res){
  console.log(req.body);
  items.insert(req.body);
  /*items.insert({
    sku: 'req.',
    name: 'TESTBB23',
    color: '#FF00AE',
    amount_xs: 2,
    amount_s: 1,
    amount_m: 5,
    amount_l: 3,
    amount_xl: 1,
    updated_at: Date.now()
  });*/
  res.send(200);
});

/*
[
    {
        "sku": "10231412",
        "name": "TESTBB23",
        "color": "#FF00AE",
        "amount_xs": 2,
        "amount_s": 1,
        "amount_m": 5,
        "amount_l": 3,
        "amount_xl": 1,
        "updated_at": 1501360164319,
        "meta": {
            "revision": 0,
            "created": 1501360164319,
            "version": 0
        },
        "$loki": 1
    },
    {
        "sku": "10231412",
        "name": "TESTBB23",
        "color": "#FF00AE",
        "amount_xs": 2,
        "amount_s": 1,
        "amount_m": 5,
        "amount_l": 3,
        "amount_xl": 1,
        "updated_at": 1501360166967,
        "meta": {
            "revision": 0,
            "created": 1501360166967,
            "version": 0
        },
        "$loki": 2
    }
]
*/


/* [PUT /api/item/id] - Update specific item */
router.put('/item/:id', function(req,res){
  var updating_item = items.find({sku : req.params.id});
  updating_item.name = req.body.name;
  updating_item.amount_xs = req.body.amount_xs;
  updating_item.amount_s = req.body.amount_s;
  updating_item.amount_m = req.body.amount_m;
  updating_item.amount_l = req.body.amount_l;
  updating_item.amount_xl = req.body.amount_xl;
  items.update(updating_item);
  res.send(200);
});

/* [DELETE /api/item/id] - Delete specific item */
router.delete('/item/:id', function(req,res){
  res.send('[DELETE /api/item/id]');
});


/*  **************************
    ****** API for Order ******
*/
/* [GET /api/order] - Get all items */
router.get('/order', function(req,res){
  res.send('[GET /api/order]');
});

/* [GET /api/order/id] - Get specific items */
router.get('/order/:id', function(req,res){
  res.send('[GET /api/order/id]');
});

/* [POST /api/order] - Create a new item */
router.post('/order', function(req,res){
  res.send('[POST /api/order]');
});

/* [PUT /api/order/id] - Update specific item */
router.put('/order/:id', function(req,res){
  res.send('[PUT /api/order/id]');
});

/* [DELETE /api/item/id] - Delete specific item */
router.delete('/order/:id', function(req,res){
  res.send('[DELETE /api/order/id]');
});



module.exports = router;

var express = require('express');
var router = express.Router();
var loki = require('lokijs'),
  db = new loki('stylecooker.json');

var MongoObject = require('mongodb');
var mongo = MongoObject.MongoClient;
var ObjectId = MongoObject.ObjectID;

var db;
mongo.connect('mongodb://scadmin:123456@ds159892.mlab.com:59892/stylecooker',function(err,database){
  if(err) console.log('Database link down');

  console.log('Connect Success');
  db = database;
});


/*  **************************
    ****** API for Item ******
*/
/* [GET /api/item] - Get all items */
router.get('/item', function(req,res){
  var itemObj = db.collection('items');

  itemObj.find({}).toArray(function(err, docs) {
    console.log(docs);
    res.send({items: docs});
  });
});

/* [GET /api/item/id] - Get specific items */
router.get('/item/:id', function(req,res){
  var itemObj = db.collection('items');

  itemObj.find({sku:req.params.id}).toArray(function(err, docs) {
    console.log(docs);
    res.send({items: docs});
  });

});

/* [POST /api/item] - Create a new item */
router.post('/item', function(req,res){
  db.collection('items').save(req.body, function(err,result){
    if(err) return console.log(err);

    res.send(200);
  });
});

/* [PUT /api/item/id] - Update specific item */
router.put('/item/:id', function(req,res){
  db.collection('items').updateOne(
    {
      sku:req.params.id
    },
    {
      $set:{
        name: req.body.name,
        amount_xs: req.body.amount_xs,
        amount_s: req.body.amount_s,
        amount_m: req.body.amount_m,
        amount_l: req.body.amount_l,
        amount_xl: req.body.amount_xl
      }
    }, function(err,result){
      if(err) return console.log(err);

      console.log('Update Success');
      res.send(200);
    }
  );
});

/* [DELETE /api/item/id] - Delete specific item */
router.delete('/item/:id', function(req,res){
  var itemObj = db.collection('items');

  itemObj.deleteOne({sku:req.params.id}, function(err, docs) {
    console.log(docs);
    res.send(200);
  });
});


/*  **************************
    ****** API for Order ******
*/
/* [GET /api/order] - Get all orders */
router.get('/order', function(req,res){
  var orderObj = db.collection('orders');

  orderObj.find({}).toArray(function(err, docs) {
    console.log(docs);
    res.send({orders: docs});
  });
});

/* [GET /api/order/id] - Get specific order */
router.get('/order/:id', function(req,res){
  var orderObj = db.collection('orders');
                     
  orderObj.find({_id:ObjectId(req.params.id)}).toArray(function(err, docs) {
    console.log(docs);
    res.send({orders: docs});
  });

});

/* [POST /api/order] - Create a new order */
router.post('/order', function(req,res){
  console.log(req.body);
  db.collection('orders').save(req.body, function(err,result){
    if(err) return console.log(err);

    res.send(200);
  });
});

/* [PUT /api/order/id] - Update specific order */
router.put('/order/:id', function(req,res){
  db.collection('orders').updateOne(
    {
      _id:ObjectId(req.params.id)
    },
    {
      $set:{
        item_id: req.body.item_id,
        mobile: req.body.mobile,
        size: req.body.size,
        amount: req.body.amount,
        total: req.body.total
      }
    }, function(err,result){
      if(err) return console.log(err);

      console.log('Update Success');
      res.send(200);
    }
  );
});

/* [DELETE /api/order/id] - Delete specific order */
router.delete('/order/:id', function(req,res){
  var orderObj = db.collection('orders');

  orderObj.deleteOne({_id:ObjectId(req.params.id)}, function(err, docs) {
    console.log(docs);
    res.send(200);
  });
});

module.exports = router;

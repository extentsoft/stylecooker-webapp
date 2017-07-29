var express = require('express');
var router = express.Router();

/* [GET /api/item ] - Get all items */
router.get('/item', function(req,res){

})

/* [POST /api/item ] - Create a new item */
router.post('/item', function(req,res){
  res.send(200);
});


module.exports = router;

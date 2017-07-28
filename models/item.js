var OrderObject = require('./order');

function Item(models){
  this._items = models;
}

Item.prototype.getAllItems = function(){
  return this._items;
}

Item.prototype.getDiscount = function(subtotal, uid, done){


  OrderObject.getDiscount(subtotal,uid, function(discount){
    done(discount);
  })

}

module.exports = Item;

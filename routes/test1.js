module.exports = function(models){
  'use strict';

  return {
    /**
      Test1 index
      @param req
      @param res
    */
    index: function(req,res){
      models.Item.itemForIndex()
        .then(function(items){
          res.render('test1_index',{items:items});
        },
        function(err){
          res.send(500);
        }
      );
    }
  };
};

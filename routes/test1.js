module.exports = function(models){
  'use strict';

  return {
    index: function(req,res){
      //models.Item.itemForIndex();
      models.Item.itemForIndex()
        .then(function(items){

        },
        function(err){

        });
    }
  }
};

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
chai.should();

var chai2 = chai;
var expect = chai2.expect;

var ItemObject = require('../../models/item');
var item = new ItemObject([{}]);

var OrderObject = require('../../models/order');

describe('Inventory Index Route', function(){
  describe('BDD - displays all items on inventory index', function(){
    beforeEach(function(){
      sinon.stub(OrderObject, 'getDiscount').callsFake(function(subtotal,uid,done){
        setTimeout(function(){
          done({
            discount: 10
          });
        }, 0);
      });
      /*sinon.stub(OrderObject, 'getDiscount', function(subtotal,district,done){
        setTimeout(function(){
          done({
            amount: 30
          });
        }, 0);
      });*/
    });

    afterEach(function(){
      OrderObject.getDiscount.restore();
    })

    it('should get all items',function(done){
      item.getAllItems().should.have.length.above(0);
      done();
    });

    it('getDiscount() should execute cb with discount amount', function(done){
      var subtotal = 1000;
      var uid = 1;
      item.getDiscount(subtotal,uid, function(result){
        expect(result.discount).to.equal(10);
        expect(OrderObject.getDiscount.getCall(0).args[0]).to.equal(subtotal);
        expect(OrderObject.getDiscount.getCall(0).args[1]).to.equal(uid);
        done();
      });

    });


  });
});

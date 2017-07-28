var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.should();

// Object to mock the articles model
var itemMock = {};
var test1 = require('../../routes/test1.js')({Item: itemMock});

// Snip - Variable and function declarations removed for brevity

describe('Test1 Index Route', function(){
  it('calls Item.itemForIndex', function(){
    itemMock.itemForIndex = sinon.spy();

    test1.index({},{});

    itemMock.itemForIndex.should.have.been.calledOnce;
  });
});

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.should();

describe('Test1 Index Route', function(){
  var itemMock;     // Object to mock the item model
  var promiseMock;  // Mock for the promise returned by item for index
  var response;     //Object to mock the response
  var test1;        //Test1 Route

  function requireTest1(models){
    return require('../../routes/test1.js')(models);
  }
  function callTest1IndexRoute(){
    test1.index({}, response);
  }

  beforeEach(function(){
    response = {};
    promiseMock = {};
    itemMock = {};

    itemMock.itemForIndex = sinon.stub()
      .returns(promiseMock);

    promiseMock.then = sinon.spy();

    test1 = requireTest1({Item: itemMock});
  });

  it('calls Item.itemForIndex', function(){
    callTest1IndexRoute();
    itemMock.itemForIndex.should.have.been.calledOnce;
  });

  it('passes resolve and reject functions to itemForIndex', function(){
    callTest1IndexRoute();
    var args = promiseMock.then.getCall(0).args;

    args.length.should.equal(2);

    args[0].should.be.a.function;
    args[1].should.be.a.function;
  });
});

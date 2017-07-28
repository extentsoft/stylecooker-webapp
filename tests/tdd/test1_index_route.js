var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.should();

// Snip - Variable and function declarations removed for brevity

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

    response.render = sinon.stub();
    response.send = sinon.stub();

    test1 = requireTest1({Item: itemMock});
  });

  it('calls the render function with the correct template name', function(){
    callTest1IndexRoute();

    // Call the promise resolve function
    promiseMock.then.getCall(0).args[0]({});

    response.render.getCall(0).args.length.should.be.above(0);
    response.render.getCall(0).args[0].should.equal('test1_index');
  });

  it('passes the items to the render function', function(){
    var items = {};
    callTest1IndexRoute();

    // Call the promise resolve function
    promiseMock.then.getCall(0).args[0](items);

    var args = response.render.getCall(0).args;
    args.length.should.be.above(1);
    //args[1].should.be.an.object;
    args[1].should.have.property('items');
    args[1].items.should.equal(items);
  });

  it('sends a 500 status on error', function(){
    callTest1IndexRoute();

    // Call the promise reject function
    promiseMock.then.getCall(0).args[1]({message: "There was an error"});

    response.send.should.have.been.calledOnce;
    response.send.should.have.been.calledWith(500);
  });

  // Snip - Existing tests removed for brevity
  it('calls the render function', function(){
    callTest1IndexRoute();

    // Call the promise resolve function
    promiseMock.then.getCall(0).args[0]({});
    response.render.should.have.been.calledOnce;
  });

  it('calls Item.itemForIndex', function(){
    callTest1IndexRoute();
    itemMock.itemForIndex.should.have.been.calledOnce;
  });

  it('passes resolve and reject functions to itemForIndex', function(){
    callTest1IndexRoute();
    var args = promiseMock.then.getCall(0).args;

    args.length.should.equal(2);

    //args[0].should.be.a.function;
    //args[1].should.be.a.function;
  });
});

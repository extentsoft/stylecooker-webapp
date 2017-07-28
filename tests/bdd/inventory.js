var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var wd = require('wd');
chai.use(chaiAsPromised);
chai.should();
//var expect = chai.expect;

chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var browser = wd.promiseChainRemote();

describe('Inventory', function(){
  describe('Sitemap', function(){

    before(function(done){
      browser.init({browserName: 'chrome'})
      .then(function(){
        done();
      });
    });

    after(function(done){
      browser.quit()
        .then(function(){
          done();
        })
    });

    it('should render /inventory/', function(done){
      browser.get('http://localhost:3000/inventory/')
        .title()
        .then(function(title){
          title.should.equal('Inventory');
        })
        .nodeify(done);
    });

    it('should render /inventory/add', function(done){
      browser.get('http://localhost:3000/inventory/add')
        .title()
        .then(function(title){
          title.should.equal('New Item');
        })
        .nodeify(done);
    });

    it('should render /inventory/update', function(done){
      browser.get('http://localhost:3000/inventory/edit')
        .title()
        .then(function(title){
          title.should.equal('Edit Item');
        })
        .nodeify(done);
    });

    it('should render /inventory/query', function(done){
      browser.get('http://localhost:3000/inventory/query')
        .title()
        .then(function(title){
          title.should.equal('Item Search Result');
        })
        .nodeify(done);
    });

  });
});


describe('Inventory Index/Home', function(){
  this.timeout(6000);

  before(function(done){
    browser.init({browserName: 'chrome'})
      .then(function(){
        done();
      });
  });

  beforeEach(function(done){
    browser.get('http://localhost:3000/inventory')
      .then(function(){
        done();
      });
  });

  after(function(done){
    browser.quit()
      .then(function(){
        done();
      });
  });

  /*
  As an administrator,
  I would be able to open /inventory
  so that I could use inventory application
  */
  it("should be able to retrieve page title 'Inventory' from /inventory", function(done){
    browser
      .title()
      .then(function(title){
        //should.not.exist(err);
        title.should.equal("Inventory");
      })
      .nodeify(done);
  });

  /*
  As a administrator,
  I would like to see all items listed order by SKU in one page
  so hat I can scroll up/down to see my inventory
  */
  it('displays all items on inventory index', function(done){
    browser.elementByCssSelector('.item-summary').should.eventually.have.length.above(0).notify(done);
  });
});

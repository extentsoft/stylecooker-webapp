var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var wd = require('wd');

chai.use(chaiAsPromised);
chai.should();

chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var browser = wd.promiseChainRemote();

describe('Sales Process', function(){
  this.timeout(6000);
  describe('Site Map', function(){
    before(function(done){
      browser.init({browserName: 'chrome'})
        .then(function(){
          done();
        });
    });
    beforeEach(function(done){
      done();
    });
    after(function(done){
      browser.quit()
        .then(function(){
          done();
        });
    });

    it('should render /sales/', function(done){
      browser.get('http://localhost:3000/sales/')
        .title()
        .then(function(title){
          title.should.equal("Sales Process - Catalog");
        })
        .nodeify(done);
    });
    it('should render /sales/catalog', function(done){
      browser.get('http://localhost:3000/sales/catalog')
        .title()
        .then(function(title){
          title.should.equal("Sales Process - Catalog");
        })
        .nodeify(done);
    });
    it('should render /sales/reservation', function(done){
      browser.get('http://localhost:3000/sales/reservation')
        .title()
        .then(function(title){
          title.should.equal("Sales Process - Reservation");
        })
        .nodeify(done);
    });
    it('should render /sales/shipping', function(done){
      browser.get('http://localhost:3000/sales/shipping')
        .title()
        .then(function(title){
          title.should.equal("Sales Process - Shipping");
        })
        .nodeify(done);
    });
    it('should render /sales/history', function(done){
      browser.get('http://localhost:3000/sales/history')
        .title()
        .then(function(title){
          title.should.equal("Sales Process - History");
        })
        .nodeify(done);
    });

  });
});

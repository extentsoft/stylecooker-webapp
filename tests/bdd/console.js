var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var wd = require('wd');

chai.use(chaiAsPromised);
chai.should();

chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var browser = wd.promiseChainRemote();

describe('Console', function(){
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
        });
    });

    it('should render /console/', function(done){
      browser.get('http://localhost:3000/console/')
        .title()
        .then(function(title){
          title.should.equal('Console');
        })
        .nodeify(done);
    });

  });
});

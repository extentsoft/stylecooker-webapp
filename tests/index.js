require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var wd = require('wd');
var selenium = require('selenium-webdriver');


chai.use(chaiAsPromised);
chai.should();

chaiAsPromised.transferPromiseness = wd.transferPromiseness;

describe('mocha spec examples', function() {
  this.timeout(10000);

  // returning promises and chai-as-promised is the best way
  describe("using promises and chai-as-promised", function() {
    var browser;

    before(function() {
      browser = wd.promiseChainRemote();
      // optional extra logging
      browser.on('status', function(info) {
        console.log(info.cyan);
      });
      browser.on('command', function(eventType, command, response) {
        console.log(' > ' + eventType.cyan, command, (response || '').grey);
      });
      browser.on('http', function(meth, path, data) {
        console.log(' > ' + meth.magenta, path, (data || '').grey);
      });
      return browser
        .init({browserName:'chrome'});
    });

    beforeEach(function() {
      return browser.get("http://localhost:3000/");
    });

    after(function() {
      return browser
        .quit();
    });

    it("should retrieve the page title", function() {
      return browser
        .title().should.become("Express");
    });

/*
    it("submit element should be clicked", function() {
      // jshint evil: true
      return browser
        .elementById("submit")
        .click()
        .eval("window.location.href").should.eventually.include("&submit");
    });*/
  });

  // regular mocha usage is also an option
  describe("regular mocha usage", function() {
    var browser;

    before(function(done) {
      browser = wd.promiseChainRemote();
      //browser._debugPromise();
      browser.on('status', function(info) {
        console.log(info);
      });
      browser.on('command', function(meth, path, data) {
        console.log(' > ' + meth, path, data || '');
      });
      browser
        .init({browserName:'chrome'})
        .nodeify(done);  //same as : .then(function() { done(); });
    });

    beforeEach(function(done) {
      browser
        .get("http://localhost:3000/")
        .nodeify(done);
    });

    after(function(done) {
      browser
        .quit()
        .nodeify(done);
    });

    it("should retrieve the page title", function(done) {
      browser
        .title()
        .then(function(title) {
          title.should.equal("Express");
        })
        .nodeify(done);
    });



    /**
* As a Visitor,
* I would like to see summaries of the last few blog posts on the blog index,
* so that I can see which scintillating nuggets Andy has gifted to the World.
*/
it('displays a number of article summaries on the blog index', function (done) {
  browser.elementsByCssSelector('.article-summary')
    .should.eventually.have.length.above(0).notify(done);
});
/*
    it("submit element should be clicked", function(done) {
      // jshint evil: true
      browser
        .elementById("submit")
        .click()
        .eval("window.location.href")
        .then(function(location) {
          location.should.include("&submit");
        })
        .nodeify(done);
    });
    */
  });

});

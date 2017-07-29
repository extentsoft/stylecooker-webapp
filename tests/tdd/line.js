var nock = require('nock');
var chai = require('chai');
var expect = chai.expect;

 describe("LINE Integration", function(){
  /*
      As LINE,
      it needs to send us the information via /webhook
      so that conversation made by LINE user could be delivered to us
  */
  it('should get accessible via /webhook', function(done){

  });

  /*
      As system,
      it needs source information for extracting userID
      so that it can reply to receipeint correctly
  */
  it('should get source information', function(done){

  });

  /*
      As system,
      it needs to know what is the initial context from user
      so that it could select the conversation correctly
  */
  it('should get message information', function(done){

  });

 });
//https://www.codementor.io/nodejs/tutorial/unit-testing-tdd-node-js-nockjs-part-2

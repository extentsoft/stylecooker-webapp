function Facebook(){

}

Facebook.prototype.webhookCallback = function(req,res){
  res.send('facebook route');
}

module.exports = Facebook;

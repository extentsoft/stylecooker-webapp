

var loki = require('lokijs');
function LINE(models){
  this._db = new loki('loki.json');
  this.line_log = this._db.addCollection('line_log');
}

LINE.prototype.webhookCallback = function(req,res){
  var r_replyToken = req.body.events[0].replyToken
  var r_type = req.body.events[0].type
  var r_timestamp = req.body.events[0].timestamp
  var r_source = req.body.events[0].source
  var r_message = req.body.events[0].message
  console.log("replyToken: ",r_replyToken)
  console.log("type: ",r_type)
  console.log("timestamp: ",r_timestamp)
  console.log("source: ",r_source)
  console.log("message: ",r_message)

  var sender = r_source.userId

  if(r_message.type == 'image'){
    sendText(sender, "Image is analyzing")
  }
  else if( r_message.type == 'sticker' ){
    sendS(sender)
  }
  else if( r_message.type == 'text'){
    //var text = req.body.events[0].message.text
    //var sender = req.body.events[0].source.userId
    //var replyToken = req.body.events[0].replyToken
    var text = r_message.text
    var replyToken = r_replyToken

    console.log(text, sender, replyToken)
    console.log(typeof sender, typeof text)
    //console.log(req.body.events[0])

    trapRequest(sender,text);
  }

  this.line_log.insert({
    replyTokay: r_replyToken,
    type: r_type,
    timestamp: r_timestamp,
    source: r_source,
    message: r_message
  });

  res.sendStatus(200);
};

function trapRequest(sender,text){
  if(text === 'สวัสดี') sendText(sender, text + " .. this is replied from bot")
  if(text === 'Hello') sendText(sender, text + " .. this is replied from bot")
  if(text === 'hello') sendText(sender, text + " .. this is replied from bot")

}

function sendS(sender){
  let data = {
    to: sender,
    messages: [
      {
        type: 'sticker',
        packageId: '1',
        stickerId: '1'
      }
    ]
  }

  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {fL2zObY2SvUdRzYK3bZXC4Aao++4YseJ2tjQOiDuYGrPXkDphn8eoYjjpp/tYRSx/3AoQNosYLSWV39DozjIykdSN4HyvIbz0pO9OWg/xrwYM2v/XPdwO9DeOmQQ/8lWzqP8Rd6bxGMak8PUOQZD+AdB04t89/1O/w1cDnyilFU=}'
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
    },
    function (error, response, body) {
      if (error) console.log('error')
      if (response) console.log('success')
      if (body) console.log(body)
      if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
      }
    }
  )
}

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'สวัสดี bot นะฮะ'
      }
    ]
  }

  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {fL2zObY2SvUdRzYK3bZXC4Aao++4YseJ2tjQOiDuYGrPXkDphn8eoYjjpp/tYRSx/3AoQNosYLSWV39DozjIykdSN4HyvIbz0pO9OWg/xrwYM2v/XPdwO9DeOmQQ/8lWzqP8Rd6bxGMak8PUOQZD+AdB04t89/1O/w1cDnyilFU=}'
      //'Authorization': 'fL2zObY2SvUdRzYK3bZXC4Aao++4YseJ2tjQOiDuYGrPXkDphn8eoYjjpp/tYRSx/3AoQNosYLSWV39DozjIykdSN4HyvIbz0pO9OWg/xrwYM2v/XPdwO9DeOmQQ/8lWzqP8Rd6bxGMak8PUOQZD+AdB04t89/1O/w1cDnyilFU='
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
    }, function (error, response, body) {
      if (error) console.log('error')
      if (response) console.log('success')
      if (body) console.log(body)
      if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
      }
  })
/*
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'fL2zObY2SvUdRzYK3bZXC4Aao++4YseJ2tjQOiDuYGrPXkDphn8eoYjjpp/tYRSx/3AoQNosYLSWV39DozjIykdSN4HyvIbz0pO9OWg/xrwYM2v/XPdwO9DeOmQQ/8lWzqP8Rd6bxGMak8PUOQZD+AdB04t89/1O/w1cDnyilFU='
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
  */
}


module.exports = LINE;

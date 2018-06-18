var express = require('express')
var app = express()
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "bb3411a9",
  apiSecret: "q8sjJ8B3svMDSEOn"
});
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!.')
})
nexmo.message.sendSms(
  "919791532202", '919791532202', 'this is test',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
  
